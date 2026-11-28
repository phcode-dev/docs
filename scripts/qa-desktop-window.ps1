param([string]$ArtifactDir)
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName UIAutomationClient,UIAutomationTypes,System.Drawing
Add-Type @"
using System;
using System.Runtime.InteropServices;
public class WindowImage {
  [DllImport("user32.dll")] public static extern bool PrintWindow(IntPtr h, IntPtr dc, uint flags);
  [DllImport("user32.dll")] public static extern bool SetProcessDPIAware();
  [DllImport("user32.dll")] public static extern bool SetForegroundWindow(IntPtr h);
}
"@
[void][WindowImage]::SetProcessDPIAware()
$registry = @('HKCU:\Software\Microsoft\Windows\CurrentVersion\Uninstall\*','HKLM:\Software\Microsoft\Windows\CurrentVersion\Uninstall\*','HKLM:\Software\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall\*')
function Find-App { Get-ItemProperty $registry -ErrorAction SilentlyContinue | Where-Object { $_.DisplayName -eq 'Phoenix Code' } | Select-Object -First 1 }
$app = Find-App
if (!$app) {throw 'Phoenix Code was not installed'}
$exe = $app.UninstallString.Trim('"')
Write-Output ("Installed program: " + $app.DisplayName + " " + $app.DisplayVersion)
Start-Process -FilePath $exe
$root = [Windows.Automation.AutomationElement]::RootElement
$trueCondition = [Windows.Automation.Condition]::TrueCondition
$scope = [Windows.Automation.TreeScope]
$buttonProp = [Windows.Automation.AutomationElement]::ControlTypeProperty
function Get-Dialog {
  foreach ($win in $root.FindAll($scope::Children,$trueCondition)) {
    if ($win.Current.Name -match 'Phoenix Code' -and $win.Current.ClassName -eq '#32770') {return $win}
  }
}
$limit = [datetime]::UtcNow.AddSeconds(38)
do {
  Start-Sleep -Milliseconds 450
  $dialog = Get-Dialog
  if ($dialog) {
    $controls = @($dialog.FindAll($scope::Descendants,$trueCondition))
    $uninstall = $controls | Where-Object { $_.Current.Name.Trim('&') -eq 'Uninstall' -and $_.Current.ControlType -eq [Windows.Automation.ControlType]::Button } | Select-Object -First 1
  }
} until ($uninstall -or [datetime]::UtcNow -gt $limit)
if (!$uninstall) {throw 'The native confirmation dialog or Uninstall button was unavailable.'}
$names = @($controls | ForEach-Object { $_.Current.Name } | Where-Object { $_ } | Select-Object -Unique)
Write-Output $dialog.Current.Name
Write-Output ($names -join ' / ')
$check = $controls | Where-Object { $_.Current.ControlType -eq [Windows.Automation.ControlType]::CheckBox } | Select-Object -First 1
if ($check) {
  $state = $check.GetCurrentPattern([Windows.Automation.TogglePattern]::Pattern).Current.ToggleState
  Write-Output ($check.Current.Name + ': ' + $state)
  if ($state -ne 'Off') {throw 'App data deletion was selected by default.'}
}
$handle = [IntPtr]$dialog.Current.NativeWindowHandle
[void][WindowImage]::SetForegroundWindow($handle)
Start-Sleep -Milliseconds 400
$bounds = $dialog.Current.BoundingRectangle
$bitmap = [Drawing.Bitmap]::new([int]$bounds.Width,[int]$bounds.Height)
$g = [Drawing.Graphics]::FromImage($bitmap)
$dc = $g.GetHdc()
$drawn = [WindowImage]::PrintWindow($handle,$dc,2)
$g.ReleaseHdc($dc)
if (!$drawn) { $g.CopyFromScreen([int]$bounds.X,[int]$bounds.Y,0,0,$bitmap.Size) }
$bitmap.Save((Join-Path $ArtifactDir 'windows-uninstaller.png'),[Drawing.Imaging.ImageFormat]::Png)
$g.Dispose(); $bitmap.Dispose()
$uninstall.GetCurrentPattern([Windows.Automation.InvokePattern]::Pattern).Invoke()
$end = [datetime]::UtcNow.AddSeconds(65)
while ((Find-App) -and [datetime]::UtcNow -lt $end) { Start-Sleep -Milliseconds 450 }
if (Find-App) {throw 'Registration still present after uninstall.'}
Write-Output 'Uninstall registration removed.'
