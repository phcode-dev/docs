param([string]$ArtifactDir)
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing
Add-Type @"
using System;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using System.Text;
public class NativeDialog {
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
$registry=@('HKCU:\Software\Microsoft\Windows\CurrentVersion\Uninstall\*','HKLM:\Software\Microsoft\Windows\CurrentVersion\Uninstall\*','HKLM:\Software\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall\*')
function Find-App {Get-ItemProperty $registry -ErrorAction SilentlyContinue | Where-Object { $_.DisplayName -eq 'Phoenix Code' } | Select-Object -First 1}
$app=Find-App
if (!$app) { throw 'Phoenix Code was not installed' }
$exe=$app.UninstallString.Trim('"')
Write-Output ("Installed program: " + $app.DisplayName + " " + $app.DisplayVersion)
Start-Process -FilePath $exe -ArgumentList ("_?=" + (Split-Path $exe -Parent))
$button=$z
$dialog=$z
$limit=[datetime]::UtcNow.AddSeconds(45)
do {
 Start-Sleep -Milliseconds 350
 foreach ($w in [NativeDialog]::Windows($z)) {
  $title=[NativeDialog]::Title($w)
  if ($title -match 'Installer Language|Language Selection') {
   $ok=[NativeDialog]::GetDlgItem($w,1)
   [void][NativeDialog]::PostMessage($w,273,[IntPtr]1,$ok)
  }
  if ($title -match 'Phoenix Code') {
   foreach ($child in [NativeDialog]::Windows($w)) {
    $label=[NativeDialog]::Label($child)
    if ($label.Replace('&','') -eq 'Uninstall') { $button=$child; $dialog=$w; break }
   }
  }
 }
} until ($button -ne $z -or [datetime]::UtcNow -gt $limit)
if ($button -eq $z) {
 $summary=foreach ($w in [NativeDialog]::Windows($z)) {
  $t=[NativeDialog]::Title($w);$t
  if ($t -match 'Phoenix|Language') {foreach ($c in [NativeDialog]::Windows($w)) {[NativeDialog]::Label($c)}}
 }
 $summary | Out-File (Join-Path $ArtifactDir 'native-windows.txt')
 throw ('Uninstall dialog unavailable: ' + ($summary -join ' / '))
}
Write-Output ([NativeDialog]::Title($dialog))
foreach ($child in [NativeDialog]::Windows($dialog)) {
 $label=[NativeDialog]::Label($child)
 if ($label) {Write-Output $label}
 if ($label -match 'delete.*data') {
  $checked=[NativeDialog]::Query($child,240,$z,$z).ToInt64()
  if ($checked -ne 0) {throw 'Delete app data selected by default'}
  Write-Output 'The application data checkbox was unchecked.'
 }
}
[void][NativeDialog]::SetForegroundWindow($dialog)
Start-Sleep -Milliseconds 400
$rect=New-Object NativeDialog+Rect
[void][NativeDialog]::GetWindowRect($dialog,[ref]$rect)
$bitmap=[Drawing.Bitmap]::new(($rect.right-$rect.left),($rect.bottom-$rect.top))
$g=[Drawing.Graphics]::FromImage($bitmap)
$dc=$g.GetHdc()
$drawn=[NativeDialog]::PrintWindow($dialog,$dc,2)
$g.ReleaseHdc($dc)
if (!$drawn) {$g.CopyFromScreen($rect.left,$rect.top,0,0,$bitmap.Size)}
$bitmap.Save((Join-Path $ArtifactDir 'windows-uninstaller.png'),[Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$bitmap.Dispose()
[void][NativeDialog]::PostMessage($button,245,$z,$z)
$end=[datetime]::UtcNow.AddSeconds(60)
while ((Find-App) -and [datetime]::UtcNow -lt $end) {Start-Sleep -Milliseconds 400}
if (Find-App) {throw 'Registration still present after uninstall.'}
Write-Output 'Uninstall registration removed.'
