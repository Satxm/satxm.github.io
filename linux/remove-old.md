
## 查看已安装内核

```bash
dpkg --get-selections | grep linux 
```

## 卸载旧内核

```bash
sudo apt-get remove 需要卸载的内核
```

## 卸载旧内核配置文件

```bash
sudo apt-get purge 需要卸载的内核 
```

## 更新系统引导

```bash
sudo update-grub 
```
