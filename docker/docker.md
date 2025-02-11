
# 

## 安装 Docker

如果你过去安装过 Docker，先卸载掉已安装 Docker：

```
for pkg in docker.io docker-doc docker-compose podman-docker containerd runc; do apt-get remove $pkg; done
```

安装依赖：

```bash
apt-get update
apt-get install ca-certificates curl gnupg
```

信任 Docker 的 GPG 公钥并添加仓库：

<!-- tabs:start -->
#### **mirrors.ustc.edu.cn**
```bash
install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://mirrors.ustc.edu.cn/docker-ce/linux/debian/gpg | gpg --dearmor -o /etc/apt/keyrings/docker-ce.gpg
sudo chmod a+r /etc/apt/keyrings/docker-ce.gpg
echo \
"deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://mirrors.ustc.edu.cn/docker-ce/linux/debian \
"$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
tee /etc/apt/sources.list.d/docker-ce.list > /dev/null
```
#### **mirrors.tuna.tsinghua.edu.cn**
```bash
install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/debian/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
echo \
"deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/debian \
"$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
tee /etc/apt/sources.list.d/docker.list > /dev/null
```
#### **mirrors.aliyun.com**
```bash
install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://mirrors.aliyun.com/docker-ce/linux/debian/gpg | gpg --dearmor -o /etc/apt/keyrings/docker-ce.gpg
sudo chmod a+r /etc/apt/keyrings/docker-ce.gpg
echo \
"deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://mirrors.aliyun.com/docker-ce/linux/debian \
"$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
tee /etc/apt/sources.list.d/docker-ce.list > /dev/null
```
<!-- tabs:end -->

安装 Docker

```bash
apt-get update
apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

添加 Docker 镜像源

```bash
# 创建目录
sudo mkdir -p /etc/docker
# 写入镜像配置
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": [
    "https://dhub.kubesre.xyz",
    "https://docker.1panel.live",
    "https://docker.kejilion.pro",
    "https://docker.m.daocloud.io",
    "https://docker.nastool.de",
    "https://docker.unsee.tech",
    "https://dockerhub.icu",
    "https://dockerpull.org",
    "https://hub.crdz.gq",
    "https://hub.littlediary.cn",
    "https://hub.rat.dev",
    "https://hub.xdark.top",
    "https://registry.dockermirror.com"
  ]
}
EOF
# 重启docker服务
sudo systemctl daemon-reload
sudo systemctl restart docker
```

## 一些 Daocker 镜像

```docker

# Dpanel

docker run -d --name dpanel --restart=always \
--net=host -e APP_NAME=dpanel \
-v /var/run/docker.sock:/var/run/docker.sock -v /var/docker/dpanel:/dpanel \
dpanel/dpanel:lite

# nginx-proxy-manager

docker run -d --name nginx-proxy-manager --restart=always \
--net=host -v /var/docker/nginx-proxy-manager/data:/data \
-v /var/docker/nginx-proxy-manager/letsencrypt:/etc/letsencrypt \
chishin/nginx-proxy-manager-zh:latest

docker run -d --restart=always --name=xunlei --net=host \
-e XL_DASHBOARD_PORT=8091 \
-v /var/docker/xunlei/data:/xunlei/data \
-v /var/media:/xunlei/downloads --privileged \
cnk3x/xunlei:latest


docker run -d --restart=always --name=qbittorrent --net=host \
-e PUID=0 -e PGID=0 -e TZ=Asia/ShangHai -e WEBUI_PORT=8090 \
-v /var/docker/qbittorrent/config:/config \
-v /var/media:/downloads \
linuxserver/qbittorrent:latest

docker run -d --restart=always --name=jellyfin --net=host \
-v /var/docker/jellyfin/cache:/cache \
-v /var/docker/jellyfin/config:/config \
-v /var/media:/media \
-v /usr/share/fonts:/usr/share/fonts \
--add-host api.themoviedb.org:103.246.246.144 \
--add-host api.themoviedb.org:13.226.61.7 \
--add-host api.themoviedb.org:31.13.76.99 \
--add-host image.tmdb.org:143.244.49.177 \
--add-host image.tmdb.org:169.150.249.169 \
--add-host www.themoviedb.org:3.160.188.78 \
--add-host www.themoviedb.org:3.166.244.54 \
--add-host www.themoviedb.org:3.166.244.28 \
--add-host www.themoviedb.org:3.166.244.31 \
jellyfin/jellyfin:latest

wget https://github.com/walinejs/waline/blob/main/assets/waline.sqlite
docker run -d --name waline --restart=always --net=host \
-v /var/docker/waline:/app/data \
-e TZ=Asia/Shanghai \
-e SQLITE_PATH=/app/data \
-e JWT_TOKEN=xtl.0911 \
-e SITE_NAME=Waline \
-e SITE_URL=https://waline.sat911.top \
-e SECURE_DOMAINS=www.sat911.top,sat911.top \
-e AUTHOR_EMAIL=Satxm@outlook.com \
lizheming/waline

docker stop jellyfin && docker rm jellyfin && docker run -d --restart=always --name=jellyfin --net=host \
-v /var/docker/jellyfin/cache:/cache \
-v /var/docker/jellyfin/config:/config \
-v /var/media:/media \
-v /usr/share/fonts:/usr/share/fonts \
--add-host api.themoviedb.org:103.246.246.144 \
--add-host api.themoviedb.org:13.226.61.7 \
--add-host api.themoviedb.org:31.13.76.99 \
--add-host image.tmdb.org:143.244.49.177 \
--add-host image.tmdb.org:169.150.249.169 \
--add-host www.themoviedb.org:3.160.188.78 \
--add-host www.themoviedb.org:3.166.244.54 \
--add-host www.themoviedb.org:3.166.244.28 \
--add-host www.themoviedb.org:3.166.244.31 \
jellyfin/jellyfin:latest
```
