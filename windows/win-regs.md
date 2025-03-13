# Windows 注册表优化

## 桌面图标

:::: code-group
```reg [Registry]
[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\HideDesktopIcons\NewStartPanel]
; 桌面显示计算机
"{20D04FE0-3AEA-1069-A2D8-08002B30309D}"=0
; 桌面显示回收站
"{645FF040-5081-101B-9F08-00AA002F954E}"=0
; 桌面显示控制面板
"{5399E694-6CE5-4D6C-8FCE-1D8870FDCBA0}"=0
; 桌面显示用户文件夹
"{59031A47-3F72-44A7-89C5-5595FE6B30EE}"=0
; 桌面显示网络
"{F02C1A0D-BE21-4350-88B0-7367FC96EF3C}"=0
; 桌面显示 OneDrive
"{018D5C66-4533-4307-9B53-224DE2ED1FE6}"=0
```

```batch [CMD]
:: 桌面显示计算机
reg add "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\HideDesktopIcons\NewStartPanel" /v {20D04FE0-3AEA-1069-A2D8-08002B30309D} /t REG_DWORD /d 0 /f

:: 桌面显示回收站
reg add "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\HideDesktopIcons\NewStartPanel" /v {645FF040-5081-101B-9F08-00AA002F954E} /t REG_DWORD /d 0 /f

:: 桌面显示控制面板
reg add "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\HideDesktopIcons\NewStartPanel" /v {5399E694-6CE5-4D6C-8FCE-1D8870FDCBA0} /t REG_DWORD /d 0 /f

:: 桌面显示用户文件夹
reg add "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\HideDesktopIcons\NewStartPanel" /v {59031A47-3F72-44A7-89C5-5595FE6B30EE} /t REG_DWORD /d 0 /f

:: 桌面显示网络
reg add "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\HideDesktopIcons\NewStartPanel" /v {F02C1A0D-BE21-4350-88B0-7367FC96EF3C} /t REG_DWORD /d 0 /f

:: 桌面显示 OneDrive
reg add "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\HideDesktopIcons\NewStartPanel" /v {018D5C66-4533-4307-9B53-224DE2ED1FE6} /t REG_DWORD /d 0 /f
```
::::

## UAC 设置

:::: code-group
```reg [Registry]
[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System]
; UAC 通知强度级别
"ConsentPromptBehaviorAdmin"=5
; UAC 是否启用
"EnableLUA"=1
; UAC 桌面是否变黑
"PromptOnSecureDesktop"=0
```

```batch [CMD]
:: UAC 通知强度级别
reg add "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System" /v "ConsentPromptBehaviorAdmin" /t REG_DWORD /d 5 /f

:: UAC 是否启用
reg add "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System" /v "EnableLUA" /t REG_DWORD /d 1 /f

:: UAC 桌面是否变黑
reg add "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System" /v "PromptOnSecureDesktop" /t REG_DWORD /d 0 /f
```
::::

注册表项设置

注册表项位于 `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System` 中。 有关每个注册表项的信息，请参阅关联的组策略说明。

<table>
<thead>
<tr>
<th>设置名称</th>
<th>注册表项名称</th>
<th>值</th>
</tr>
</thead>
<tbody>
<tr>
<td>内置管理员帐户的管理员审批模式</td>
<td><code>FilterAdministratorToken</code></td>
<td>0 (默认) = 禁用<br />1 = 已启用</td>
</tr>
<tr>
<td>允许 UIAccess 应用程序在不使用安全桌面的情况下提示提升</td>
<td><code>EnableUIADesktopToggle</code></td>
<td>0 (默认) = 禁用<br />1 = 已启用</td>
</tr>
<tr>
<td>管理员审批模式下管理员的提升提示行为</td>
<td><code>ConsentPromptBehaviorAdmin</code></td>
<td>0 = 提升而不提示<br />1 = 在安全桌面上提示输入凭据<br />2 = 在安全桌面上提示同意<br />3 = 提示输入凭据<br />4 = 同意提示<br />5 (默认) = 提示同意非 Windows 二进制文件</td>
</tr>
<tr>
<td>标准用户的提升提示行为</td>
<td><code>ConsentPromptBehaviorUser</code></td>
<td>0 = 自动拒绝提升请求<br />1 = 在安全桌面上提示输入凭据<br />3 (默认) = 提示输入凭据</td>
</tr>
<tr>
<td>检测应用程序安装并提示提升</td>
<td><code>EnableInstallerDetection</code></td>
<td>1 = 启用 (默认仅家庭) <br />0 = 禁用 (默认) </td>
</tr>
<tr>
<td>仅提升已签名和验证的可执行文件</td>
<td><code>ValidateAdminCodeSignatures</code></td>
<td>0 (默认) = 禁用<br />1 = 已启用</td>
</tr>
<tr>
<td>仅提升安装在安全位置中的 UIAccess 应用程序</td>
<td><code>EnableSecureUIAPaths</code></td>
<td>0 = 禁用<br />1 (默认) = 已启用</td>
</tr>
<tr>
<td>在管理员审批模式下运行所有管理员</td>
<td><code>EnableLUA</code></td>
<td>0 = 禁用<br />1 (默认) = 已启用</td>
</tr>
<tr>
<td>提示提升时切换到安全桌面</td>
<td><code>PromptOnSecureDesktop</code></td>
<td>0 = 禁用<br />1 (默认) = 已启用</td>
</tr>
<tr>
<td>将文件和注册表写入失败虚拟化到每个用户位置</td>
<td><code>EnableVirtualization</code></td>
<td>0 = 禁用<br />1 (默认) = 已启用</td>
</tr>
<tr>
<td>将网络登录优先于缓存登录</td>
<td><code>InteractiveLogonFirst</code></td>
<td>0 (默认) = 禁用<br />1 = 已启用</td>
</tr>
</tbody>
</table>

表内数据来自 [用户帐户控制配置](https://learn.microsoft.com/zh-cn/windows/security/application-security/application-control/user-account-control/settings-and-configuration?tabs=reg#user-account-control-configuration)

## 其他设置

```batch
:: explorer 启动为此电脑
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Advanced" /v "LaunchTo" /t REG_DWORD /d 1 /f

:: 旧版本右键菜单
reg add "HKCU\SOFTWARE\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /ve /f

:: 移除资源管理器 OneDrive 图标
reg delete "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Desktop\NameSpace\{018D5C66-4533-4307-9B53-224DE2ED1FE6}" /f

:: 隐藏任务栏资讯和兴趣 (Windows 10)
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Feeds" /v "UnpinReason" /t REG_DWORD /d 0 /f
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Feeds" /v "ShellFeedsTaskbarOpenOnHover" /t REG_DWORD /d 0 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows\Windows Feeds" /v "EnableFeeds" /t REG_DWORD /d 0 /f

:: 隐藏任务栏搜人脉 (Windows 10)
reg add "HKCU\SOFTWARE\Policies\Microsoft\Windows\Explorer" /v "HidePeopleBar" /t REG_DWORD /d 1 /f
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Advanced\People" /v "PeopleBand" /t REG_DWORD /d 0 /f

:: 隐藏任务栏搜索框
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Search" /v "SearchboxTaskbarMode" /t REG_DWORD /d 0 /f
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Search" /v "SearchboxTaskbarModePrevious" /t REG_DWORD /d 1 /f
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Search" /v "TraySearchBoxVisible" /t REG_DWORD /d 0 /f
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Search" /v "TraySearchBoxVisibleOnAnyMonitor" /t REG_DWORD /d 0 /f
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Search" /v "OpenOnHover" /t REG_DWORD /d 0 /f
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Search" /v "ShowDynamicContent" /t REG_DWORD /d 0 /f
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\SearchSettings" /v "IsDynamicSearchBoxEnabled" /t REG_DWORD /d 1 /f
reg add "HKCU\SOFTWARE\Policies\Microsoft\Windows\Explorer" /v "DisableSearchBoxSuggestions" /t REG_DWORD /d 1 /f

:: 开始菜单禁用建议
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\ContentDeliveryManager" /v "SystemPaneSuggestionsEnabled" /t REG_DWORD /d 0 /f
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\ContentDeliveryManager" /v "SubscribedContent-338388Enabled" /t REG_DWORD /d 0 /f

:: 开始菜单最近打开的项
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Advanced" /v "Start_TrackDocs" /t REG_DWORD /d 0 /f

:: 开始菜单最近添加应用
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Start" /v "ShowRecentList" /t REG_DWORD /d 0 /f

:: 开始菜单常用应用
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Start" /v "ShowFrequentList" /t REG_DWORD /d 0 /f

:: 开始菜单推荐的应用程序
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Advanced" /v "Start_IrisRecommendations" /t REG_DWORD /d 0 /f

:: 偶尔在"开始"菜单中显示与账户相关的通知 0:关闭; 1:开启
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Advanced" /v "Start_AccountNotifications" /t REG_DWORD /d 0 /f

:: 禁用 Windows 中的广告 ID
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\AdvertisingInfo" /v "Enabled" /t REG_DWORD /d 0 /f

:: 禁用 网站访问语言列表来提供本地相关内容
reg add "HKCU\Control Panel\International\User Profile" /v "HttpAcceptLanguageOptOut" /t REG_DWORD /d 1 /f

:: 禁用 Windows 跟踪应用启动
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Advanced" /v "Start_TrackProgs" /t REG_DWORD /d 0 /f

:: 设置中禁用推荐内容
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\ContentDeliveryManager" /v "SubscribedContent-338393Enabled" /t REG_DWORD /d 0 /f
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\ContentDeliveryManager" /v "SubscribedContent-353694Enabled" /t REG_DWORD /d 0 /f
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\ContentDeliveryManager" /v "SubscribedContent-353696Enabled" /t REG_DWORD /d 0 /f

:: 在文件资源管理器中禁用广告
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Advanced" /v "ShowSyncProviderNotifications" /t REG_DWORD /d 0 /f

:: 禁用锁定屏幕上的广告
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\ContentDeliveryManager" /v "RotatingLockScreenOverlayEnabled" /t REG_DWORD /d 0 /f
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\ContentDeliveryManager" /v "SubscribedContent-338387Enabled" /t REG_DWORD /d 0 /f

:: 禁用提示和建议通知
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\ContentDeliveryManager" /v "SubscribedContent-338389Enabled" /t REG_DWORD /d 0 /f

:: 禁用建议以充分利用 Windows 并完成此设备的设置
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\UserProfileEngagement" /v "ScoobeSystemSettingEnabled" /t REG_DWORD /d 0 /f

:: 禁用 Windows 欢迎体验
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\ContentDeliveryManager" /v "SubscribedContent-310093Enabled" /t REG_DWORD /d 0 /f

:: 禁用定制体验
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Privacy" /v "TailoredExperiencesWithDiagnosticDataEnabled" /t REG_DWORD /d 0 /f

:: 开始菜单显示设置、文件资源管理器、下载的图标
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Start" /v "VisiblePlaces" /t REG_BINARY /d "86087352AA5143429F7B2776584659D42FB367E3DE895543BFCE61F37B18A937BC248A140CD68942A0806ED9BBA24882" /f

:: 更改壁纸质量
reg add "HKCU\Control Panel\Desktop" /v "JPEGImportQuality" /t REG_DWORD /d 100 /f

```

