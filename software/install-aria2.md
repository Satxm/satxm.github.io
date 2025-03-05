# 安装 Aria2 下载器

## 1、安装Aria2

```bash
sudo apt update
sudo apt install aria2 -y
```

## 2、设置Aria2
创建配置文件

```bash
sudo mkdir /etc/aria2    #新建文件夹
sudo touch /etc/aria2/aria2.session    #新建session文件
sudo chmod 777 /etc/aria2/aria2.session    #设置aria2.session可写
sudo vim /etc/aria2/aria2.conf    #创建配置文件
```

写入以下内容，请将下列配置中 ```[dir]```、```[token]```、```[poll]```、```[session]``` 替换为实际内容

```vim
# 基本设置

# 下载路径
dir=[dir]
# 最大同时下载数，默认10
max-concurrent-downloads=5
# 断点续传
continue=true

# HTTP设置

# 获取服务器文件时间
remote-time=true
# 单任务连接数
split=16
# 支持Gzip
http-accept-gzip=true
# 禁用缓存
http-no-cache=true
# HTTP代理服务器
all-proxy=
# 自定义 User-Agent
user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36

# BT设置

# 删除未选择的文件
bt-remove-unselected-file=true
# BT 服务器(BT tracker)
bt-tracker=
# 最大连接节点数，0表示不限制
# 不限制会加快下载速度
bt-max-peers=0
# 期望下载速度
# 同上同理
bt-request-peer-speed-limit=10M
# DHT 监听端口
dht-listen-port=6881-6999
# 全局最大上传速度
max-overall-upload-limit=128K
# 最小做种时间，0 表示下载完不做种
seed-time=0

# RPC 设置

# 启用 RPC 服务
enable-rpc=true
# RPC Token，必填，WenUI 需用
rpc-secret=[token]
# 接受所有远程请求
rpc-allow-origin-all=true
# 在所有网卡上监听
rpc-listen-all=true
# 监听端口
rpc-listen-port=6800
# 保存上传的种子文件
rpc-save-upload-metadata=false
# 启用 SSL/TLS
# 当启用 TLS 时必须指定证书位置
#rpc-secure=false
# 域名证书
#rpc-certificate=
# 证书 Key
#rpc-private-key=

# 高级设置

# 允许覆盖
allow-overwrite=false
# 禁用 IPV6
disable-ipv6=true
# 磁盘缓存，如果为 0 则使用内存缓存
disk-cache=64M
# 事件轮询方法
# Linux 为 epoll，Windows 为 select
event-poll=[poll]
# 最大下载速度，0表示不限制
max-download-limit=0
# 状态保存文件, session 文件位置
# 创建一个后缀为 `.session` 的文件即可
save-session=[session]
# 保存状态间隔
save-session-interval=30
# 任务下载完成后执行脚本，脚本位置
# on-download-complete=
```

## 3、创建systemd服务

```bash
sudo vim /etc/systemd/system/aria2c.service
```

输入以下内容；注意更改 ```User``` 和 ```Group``` 为你运行 Aria2 的用户和组

```vim
[Unit]
Description=Aria2c Download Service
After=network.target
Wants=network.target

[Service]
User=www-data
Group=www-data
# 指定配置文件位置
ExecStart=/usr/bin/aria2c --conf-path=/etc/aria2/aria2.conf

[Install]
WantedBy=default.target
```

查看状态

```bash
sudo systemctl status aria2c
```

显示下面内容即正常启动

```bash
● aria2c.service - Aria2c Download Service
     Loaded: loaded (/etc/systemd/system/aria2c.service; enabled; vendor preset: enabled)
     Active: active (running) since Mon 2020-08-17 14:15:22 CST; 1s ago
   Main PID: 5641 (aria2c)
      Tasks: 1 (limit: 4609)
     Memory: 4.2M
     CGroup: /system.slice/aria2c.service
             └─5641 /usr/bin/aria2c --conf-path=/etc/aria2/aria2.conf

Aug 17 14:15:22 Server systemd[1]: Started Aria2c Download Service.
Aug 17 14:15:22 Server aria2c[5641]: 08/17 14:15:22 [NOTICE] RPC transport will be encrypted.
Aug 17 14:15:22 Server aria2c[5641]: 08/17 14:15:22 [NOTICE] IPv4 RPC: listening on TCP port 6800
Aug 17 14:15:22 Server aria2c[5641]: 08/17 14:15:22 [NOTICE] IPv6 RPC: listening on TCP port 6800
```

## 5、使用 systemctl 控制

```bash
# 启动
sudo systemctl start aria2c
# 停止
sudo systemctl stop aria2c
# 重启
sudo systemctl restart aria2c
# 查看状态
sudo systemctl status aria2c
# 启用服务(开机自启)
systemctl enable aria2c
# 禁用服务(禁止开启自启)
sudo systemctl disable aria2c
```
