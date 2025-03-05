
# 配置 SSH

修改 ```/etc/ssh/sshd_config``` 文件，添加

```bash
sudo vim /etc/ssh/sshd_config
```

```vim
PermitRootLogin yes # 允许 root 登录
PasswordAuthentication yes # 允许密码登录
PubkeyAuthentication yes # 允许证书登录
```
