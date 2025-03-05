# 在登录界面隐藏用户

## 确认要隐藏的用户帐户

`Win + R` 输入 `cmd` 进入命令提示符。输入 `net user` 命令，结果如下。

```batch
net user

\\ADMIN-PC 的用户帐户

-------------------------------------------------------------------------------
__SUNLOGIN_USER__        57668                    78183
Administrator            AZ370_Admin              DefaultAccount
erbin                    Guest                    Admin
WDAGUtilityAccount       XT432                    zhang
命令成功完成。

```

## 添加注册表

1、`Win + R` 输入 `regedit` 进入注册表编辑器；

2、定位到 `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon`；

3、在 `Winlogon` 单击右键新建“项”，命名为 `SpecialAccounts`；

4、在 `SpecialAccounts` 单击右键新建“项”，命名为 `UserList` ；

5、在 `UserList` 单击右键新建“DWORD（32位）”值，命名为本地账户名称，数值数据保持默认的 `0`。

此时可以尝试锁屏再进入账户，会发现被隐藏的账户已经在锁屏界面不可见。

## 恢复显示隐藏账户

1、`Win + R` 输入 `regedit` 进入注册表编辑器；

2、定位到 `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon\SpecialAccounts`；

3、删除 `UserList` 项。
