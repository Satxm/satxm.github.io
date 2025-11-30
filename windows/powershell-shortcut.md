# PowerShell 创建快捷方式


```powershell

# 创建一个 名称为 "MyShortcut.lnk" 的快捷方式 打开 UWP 软件 "终端"
$TargetFile =  "C:\Windows\explorer.exe"
$ShortcutFile = "$env:USERPROFILE\Desktop\MyShortcut.lnk"
$WScriptShell = New-Object -ComObject WScript.Shell
$Shortcut = $WScriptShell.CreateShortcut($ShortcutFile)
$Shortcut.Arguments="shell:AppsFolder\Microsoft.WindowsTerminal_8wekyb3d8bbwe!App"
$Shortcut.TargetPath = $TargetFile
$Shortcut.Save()

```
## 参数说明

```
Arguments        : 参数
Description      : 描述
Hotkey           : 快捷键
IconLocation     : 图标位置
TargetPath       : 目标位置
WindowStyle      : 程序的窗口样式
WorkingDirectory : 工作目录
```

## WindowStyle 说明
|WindowStyle|说明|
|---|---|
|1|激活并显示窗口。如果该窗口被最小化或最大化，则系统将其还原到初始大小和位置。|
|3|激活窗口并将其显示为最大化窗口。|
|7|最小化窗口并激活下一个顶级窗口。|

