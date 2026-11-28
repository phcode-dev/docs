param([string]$Setup,[string]$ArtifactDir)
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing
Add-Type -ReferencedAssemblies System.Drawing @"
using System;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using System.Text;
public class NativeDialog {
 [DllImport("user32.dll")] public static extern bool IsWindowEnabled(IntPtr h);
 [DllImport("user32.dll")] public static extern bool GetCursorPos(out Point p);
 [DllImport("user32.dll")] public static extern bool SetCursorPos(int x,int y);
 [StructLayout(LayoutKind.Sequential)] public struct Point {public int x,y;}
 static System.Threading.Thread capture;
 static volatile bool recording;
 static int count;
 public static int Frame(){return System.Threading.Interlocked.CompareExchange(ref count,0,0);}
 public static void PointAt(IntPtr control,bool left) {
  Rect r; GetWindowRect(control,out r); Point p; GetCursorPos(out p);
  int x=left ? r.left+8 : (r.left+r.right)/2; int y=(r.top+r.bottom)/2;
  for(int i=1;i<=10;i++){SetCursorPos(p.x+(x-p.x)*i/10,p.y+(y-p.y)*i/10);System.Threading.Thread.Sleep(36);}
 }
 public static void StartMovie(IntPtr dialog,string dest){
  if(recording) return; recording=true;
  System.IO.Directory.CreateDirectory(dest);
  capture=new System.Threading.Thread(delegate(){
   var watch=System.Diagnostics.Stopwatch.StartNew();
   while(recording){
    Rect r; if(!GetWindowRect(dialog,out r)||r.right<=r.left) break;
    using(var bmp=new System.Drawing.Bitmap(r.right-r.left,r.bottom-r.top))
    using(var g=System.Drawing.Graphics.FromImage(bmp)){
     var dc=g.GetHdc(); bool ok=PrintWindow(dialog,dc,2); g.ReleaseHdc(dc);
     if(!ok) g.CopyFromScreen(r.left,r.top,0,0,bmp.Size);
     Point p; if(GetCursorPos(out p)){
      float x=p.x-r.left,y=p.y-r.top;
      g.SmoothingMode=System.Drawing.Drawing2D.SmoothingMode.AntiAlias;
      using(var pen=new System.Drawing.Pen(System.Drawing.Color.FromArgb(230,15,88,179),2)) g.DrawEllipse(pen,x-10,y-10,20,20);
      var pts=new[]{new System.Drawing.PointF(x,y),new System.Drawing.PointF(x+2,y+11),new System.Drawing.PointF(x+4,y+7),new System.Drawing.PointF(x+9,y+7)};
      g.FillPolygon(System.Drawing.Brushes.White,pts);g.DrawPolygon(System.Drawing.Pens.Black,pts);
     }
     int index=System.Threading.Interlocked.Increment(ref count);
     bmp.Save(System.IO.Path.Combine(dest,index.ToString("D5")+".png"),System.Drawing.Imaging.ImageFormat.Png);
    }
    long due=100L*Frame()-watch.ElapsedMilliseconds;
    if(due>0) System.Threading.Thread.Sleep((int)due);
   }
  });capture.IsBackground=true;capture.Start();
 }
 public static void StopMovie(){recording=false;if(capture!=null)capture.Join(1800);}
 public delegate bool Visitor(IntPtr h,IntPtr p);
 [DllImport("user32.dll")] public static extern bool EnumWindows(Visitor f,IntPtr p);
 [DllImport("user32.dll")] public static extern bool EnumChildWindows(IntPtr h,Visitor f,IntPtr p);
 [DllImport("user32.dll",CharSet=CharSet.Unicode)] public static extern int GetWindowText(IntPtr h,StringBuilder s,int len);
 [DllImport("user32.dll",CharSet=CharSet.Unicode)] public static extern IntPtr SendMessage(IntPtr h,uint m,IntPtr p,StringBuilder s);
 [DllImport("user32.dll",EntryPoint="SendMessageW")] public static extern IntPtr Query(IntPtr h,uint m,IntPtr p,IntPtr l);
 [DllImport("user32.dll")] public static extern bool PostMessage(IntPtr h,uint m,IntPtr p,IntPtr l);
 [DllImport("user32.dll")] public static extern IntPtr GetDlgItem(IntPtr h,int id);
 [DllImport("user32.dll")] public static extern bool IsWindowVisible(IntPtr h);
 [DllImport("user32.dll")] public static extern bool PrintWindow(IntPtr h,IntPtr dc,uint flags);
 [DllImport("user32.dll")] public static extern bool SetProcessDPIAware();
 [DllImport("user32.dll")] public static extern bool SetForegroundWindow(IntPtr h);
 [StructLayout(LayoutKind.Sequential)] public struct Rect {public int left,top,right,bottom;}
 [DllImport("user32.dll")] public static extern bool GetWindowRect(IntPtr h,out Rect rect);
 public static IntPtr[] Windows(IntPtr parent) {
  var found=new List<IntPtr>();Visitor v=(h,p)=>{if(IsWindowVisible(h)) found.Add(h);return true;};
  if(parent==IntPtr.Zero) EnumWindows(v,IntPtr.Zero);else EnumChildWindows(parent,v,IntPtr.Zero);
  return found.ToArray();
 }
 public static string Title(IntPtr h){var b=new StringBuilder(550);GetWindowText(h,b,550);return b.ToString();}
 public static string Label(IntPtr h){var b=new StringBuilder(550);SendMessage(h,13,(IntPtr)550,b);return b.ToString();}
}
"@
[void][NativeDialog]::SetProcessDPIAware()
$z=[IntPtr]::Zero
function Mark-Frame([string]$Event) {
 "$([NativeDialog]::Frame()) $Event" | Add-Content (Join-Path $ArtifactDir 'windows-frames.txt')
}
function Capture-Window([IntPtr]$Dialog,[string]$Name) {
 [void][NativeDialog]::SetForegroundWindow($Dialog)
 Start-Sleep -Milliseconds 250
 $rect=New-Object NativeDialog+Rect
 [void][NativeDialog]::GetWindowRect($Dialog,[ref]$rect)
 $bitmap=[Drawing.Bitmap]::new(($rect.right-$rect.left),($rect.bottom-$rect.top))
 $graphics=[Drawing.Graphics]::FromImage($bitmap)
 $dc=$graphics.GetHdc()
 $drawn=[NativeDialog]::PrintWindow($Dialog,$dc,2)
 $graphics.ReleaseHdc($dc)
 if(!$drawn){$graphics.CopyFromScreen($rect.left,$rect.top,0,0,$bitmap.Size)}
 $bitmap.Save((Join-Path $ArtifactDir $Name),[Drawing.Imaging.ImageFormat]::Png)
 $graphics.Dispose();$bitmap.Dispose()
}
$proc=Start-Process -PassThru -FilePath $Setup
$end=[datetime]::UtcNow.AddSeconds(145)
$sawMaintenance=$false
$sawFinish=$false
$previous=''
while([datetime]::UtcNow -lt $end -and !$sawFinish){
 Start-Sleep -Milliseconds 450
 foreach($w in [NativeDialog]::Windows($z)){
  $title=[NativeDialog]::Title($w)
  if($title -match 'Installer Language|Language Selection'){
   $ok=[NativeDialog]::GetDlgItem($w,1)
   [void][NativeDialog]::PostMessage($w,273,[IntPtr]1,$ok)
   continue
  }
  if($title -notmatch 'Phoenix Code.*Setup|Setup.*Phoenix Code|Phoenix Code Installer'){continue}
  $items=@()
  foreach($child in [NativeDialog]::Windows($w)){
   $label=[NativeDialog]::Label($child)
   if($label){$items+=([pscustomobject]@{Handle=$child;Name=$label;Plain=$label.Replace('&','').Trim()})}
  }
  $all=($items | ForEach-Object {$_.Plain -replace '[\r\n]+',' '}) -join ' / '
  if($previous -ne $all){
   $all.Substring(0,[Math]::Min(650,$all.Length)) | Tee-Object -Append -FilePath (Join-Path $ArtifactDir 'windows-wizard.txt')
   $previous=$all
  }
  $radio=$items | Where-Object {$_.Plain -match 'Add/Reinstall|Reinstall components|add or reinstall'} | Select-Object -First 1
  if($radio -and !$sawMaintenance){
   [NativeDialog]::StartMovie($w,(Join-Path $ArtifactDir 'frames'))
   Start-Sleep -Milliseconds 500
   [NativeDialog]::PointAt($radio.Handle,$true)
   Mark-Frame 'choose maintenance'
   Start-Sleep -Milliseconds 1300
   [void][NativeDialog]::PostMessage($radio.Handle,245,$z,$z)
   Start-Sleep -Milliseconds 250
   $state=[NativeDialog]::Query($radio.Handle,240,$z,$z).ToInt64()
   if($state -ne 1){throw "Expected checked maintenance choice: $($radio.Name)"}
   Capture-Window $w 'windows-reinstall.png'
   $sawMaintenance=$true
  }
  $button=$items | Where-Object {$_.Plain -match '^(OK|I Agree|Next *[>]?|Install|Finish)$'} | Select-Object -First 1
  if($button -and [NativeDialog]::IsWindowEnabled($button.Handle)){
   if($sawMaintenance){[NativeDialog]::PointAt($button.Handle,$false); Mark-Frame ("button "+$button.Plain); Start-Sleep -Milliseconds 1600}
   if($button.Plain -eq 'Finish'){
    Capture-Window $w 'windows-finish.png'
    $sawFinish=$true
    [NativeDialog]::StopMovie()
   }
   [void][NativeDialog]::PostMessage($button.Handle,245,$z,$z)
   Start-Sleep -Milliseconds 650
  }
 }
}
[NativeDialog]::StopMovie()
if(!$sawMaintenance -or !$sawFinish){
 $titles=@([NativeDialog]::Windows($z)|ForEach-Object{[NativeDialog]::Title($_)})
 throw "Expected repair and finish screens. Maintenance=$sawMaintenance Finish=$sawFinish. Windows: $titles"
}
Write-Output 'Completed the in-place repair using the maintenance wizard.'
