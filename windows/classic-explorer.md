# 恢复经典资源管理器和右键菜单

## 对于当前用户 {#user}

:::: code-group
```cmd [恢复经典(Windows 10)]
:: 右键菜单
reg add "HKEY_CURRENT_USER\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InProcServer32" /ve /f
reg add "HKEY_CURRENT_USER\Software\Classes\WOW6432Node\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InProcServer32" /ve /f
:: 资源管理器搜索
reg add "HKEY_CURRENT_USER\Software\Classes\CLSID\{1d64637d-31e9-4b06-9124-e83fb178ac6e}\InProcServer32" /ve /f
reg add "HKEY_CURRENT_USER\Software\Classes\WOW6432Node\CLSID\{1d64637d-31e9-4b06-9124-e83fb178ac6e}\InProcServer32" /ve /f
:: 资源管理器
reg add "HKEY_CURRENT_USER\Software\Classes\CLSID\{6480100b-5a83-4d1e-9f69-8ae5a88e9a33}\InProcServer32" /ve /f
reg add "HKEY_CURRENT_USER\Software\Classes\WOW6432Node\CLSID\{6480100b-5a83-4d1e-9f69-8ae5a88e9a33}\InProcServer32" /ve /f
reg add "HKEY_CURRENT_USER\Software\Classes\CLSID\{2aa9162e-c906-4dd9-ad0b-3d24a8eef5a0}\InProcServer32" /ve /f
reg add "HKEY_CURRENT_USER\Software\Classes\WOW6432Node\CLSID\{2aa9162e-c906-4dd9-ad0b-3d24a8eef5a0}\InProcServer32" /ve /f
:: 重启资源管理器
taskkill /f /im explorer.exe && start explorer.exe
```

```cmd [恢复新版(Windows 11)]
:: 右键菜单
reg delete "HKEY_CURRENT_USER\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}" /f
reg delete "HKEY_CURRENT_USER\Software\Classes\WOW6432Node\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}" /f
:: 资源管理器搜索
reg delete "HKEY_CURRENT_USER\Software\Classes\CLSID\{1d64637d-31e9-4b06-9124-e83fb178ac6e}" /f
reg delete "HKEY_CURRENT_USER\Software\Classes\WOW6432Node\CLSID\{1d64637d-31e9-4b06-9124-e83fb178ac6e}" /f
:: 资源管理器
reg delete "HKEY_CURRENT_USER\Software\Classes\CLSID\{6480100b-5a83-4d1e-9f69-8ae5a88e9a33}" /f
reg delete "HKEY_CURRENT_USER\Software\Classes\WOW6432Node\CLSID\{6480100b-5a83-4d1e-9f69-8ae5a88e9a33}" /f
reg delete "HKEY_CURRENT_USER\Software\Classes\CLSID\{2aa9162e-c906-4dd9-ad0b-3d24a8eef5a0}" /f
reg delete "HKEY_CURRENT_USER\Software\Classes\WOW6432Node\CLSID\{2aa9162e-c906-4dd9-ad0b-3d24a8eef5a0}" /f
:: 重启资源管理器
taskkill /f /im explorer.exe && start explorer.exe
```
::::

## 对于所有用户（需要 SYSTEM 权限）{#system}

::: warning 高级操作
该操作需要 SYSTEM 权限，可以使用 [superUser](https://github.com/mspaintmsi/superUser)、[NSudo](https://github.com/M2TeamArchived/NSudo) 或 [MinSudo](https://github.com/M2Team/NanaRun?#minsudo) 等工具
:::

:::: code-group

```cmd [恢复经典(Windows 10)]
:: 右键菜单
reg add "HKEY_LOCAL_MACHINE\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InProcServer32" /ve /f
reg add "HKEY_LOCAL_MACHINE\Software\Classes\WOW6432Node\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InProcServer32" /ve /f
:: 资源管理器搜索
reg add "HKEY_LOCAL_MACHINE\Software\Classes\CLSID\{1d64637d-31e9-4b06-9124-e83fb178ac6e}\InProcServer32" /ve /f
reg add "HKEY_LOCAL_MACHINE\Software\Classes\WOW6432Node\CLSID\{1d64637d-31e9-4b06-9124-e83fb178ac6e}\InProcServer32" /ve /f
:: 资源管理器
reg add "HKEY_LOCAL_MACHINE\Software\Classes\CLSID\{6480100b-5a83-4d1e-9f69-8ae5a88e9a33}\InProcServer32" /ve /f
reg add "HKEY_LOCAL_MACHINE\Software\Classes\WOW6432Node\CLSID\{6480100b-5a83-4d1e-9f69-8ae5a88e9a33}\InProcServer32" /ve /f
reg add "HKEY_LOCAL_MACHINE\Software\Classes\CLSID\{2aa9162e-c906-4dd9-ad0b-3d24a8eef5a0}\InProcServer32" /ve /f
reg add "HKEY_LOCAL_MACHINE\Software\Classes\WOW6432Node\CLSID\{2aa9162e-c906-4dd9-ad0b-3d24a8eef5a0}\InProcServer32" /ve /f
:: 重启资源管理器
taskkill /f /im explorer.exe && start explorer.exe
```

```cmd [恢复新版(Windows 11)]
:: 右键菜单
reg add "HKEY_LOCAL_MACHINE\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InProcServer32" /ve /t REG_SZ /d "C:\Windows\System32\Windows.UI.FileExplorer.dll" /f
reg add "HKEY_LOCAL_MACHINE\Software\Classes\WOW6432Node\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InProcServer32" /ve /t REG_SZ /d "C:\Windows\SysWOW64\Windows.UI.FileExplorer.dll" /f
:: 资源管理器搜索
reg add "HKEY_LOCAL_MACHINE\Software\Classes\CLSID\{1d64637d-31e9-4b06-9124-e83fb178ac6e}\InProcServer32" /ve /t REG_SZ /d "C:\Windows\System32\Windows.UI.FileExplorer.dll" /f
reg add "HKEY_LOCAL_MACHINE\Software\Classes\WOW6432Node\CLSID\{1d64637d-31e9-4b06-9124-e83fb178ac6e}\InProcServer32" /ve /t REG_SZ /d "C:\Windows\SysWOW64\Windows.UI.FileExplorer.dll" /f
:: 资源管理器
reg add "HKEY_LOCAL_MACHINE\Software\Classes\CLSID\{6480100b-5a83-4d1e-9f69-8ae5a88e9a33}\InProcServer32" /ve /t REG_SZ /d "C:\Windows\System32\Windows.UI.FileExplorer.dll" /f
reg add "HKEY_LOCAL_MACHINE\Software\Classes\WOW6432Node\CLSID\{6480100b-5a83-4d1e-9f69-8ae5a88e9a33}\InProcServer32" /ve /t REG_SZ /d "C:\Windows\SysWOW64\Windows.UI.FileExplorer.dll" /f
reg add "HKEY_LOCAL_MACHINE\Software\Classes\CLSID\{2aa9162e-c906-4dd9-ad0b-3d24a8eef5a0}\InProcServer32" /ve /t REG_SZ /d "C:\Windows\System32\Windows.UI.FileExplorer.dll" /f
reg add "HKEY_LOCAL_MACHINE\Software\Classes\WOW6432Node\CLSID\{2aa9162e-c906-4dd9-ad0b-3d24a8eef5a0}\InProcServer32" /ve /t REG_SZ /d "C:\Windows\SysWOW64\Windows.UI.FileExplorer.dll" /f
:: 重启资源管理器
taskkill /f /im explorer.exe && start explorer.exe
```
::::


