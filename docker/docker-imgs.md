# Daocker 镜像

## [Dpanel](https://dpanel.cc/#/zh-cn/install/docker)

轻量化的 Docker 可视化管理面板，提供完善的容器管理功能。容器运行后使用浏览器访问`http://<server-ip>:8080`端口。

:::: code-group

```bash [Docker Run]
docker run -d --name dpanel --restart=always \
--net=host -e APP_NAME=dpanel \
-v /var/run/docker.sock:/var/run/docker.sock \
-v /home/docker/dpanel:/dpanel \
-v /home/docker:/dpanel/compose \
dpanel/dpanel:lite
```

```yml [Compose]
services:
  dpanel:
    image: dpanel/dpanel:lite
    container_name: dpanel
    restart: unless-stopped
    network_mode: host
    environment:
      APP_NAME: dpanel
    volumes:
      - /home/run/docker.sock:/home/run/docker.sock
      - /home/docker/dpanel:/dpanel
      - /home/docker:/dpanel/compose
```
::::

## [Nginx 代理管理器（中文版）](https://github.com/xiaoxinpro/nginx-proxy-manager-zh)

[英文官方网站](https://nginxproxymanager.com/)

它可以让你轻松地部署到你的网站上运行，包括免费的SSL，而不需要知道太多关于 Nginx 或 Let's Encrypt 的信息。容器运行后使用浏览器访问`http://<server-ip>:81`端口。

默认管理员信息:

```
邮箱: admin@example.com
密码: changeme
```

:::: code-group

```bash [Docker Run]
docker run -d --name nginx-proxy-manager --restart=always \
--net=host -v /home/docker/nginx-proxy-manager/data:/data \
-v /home/docker/nginx-proxy-manager/letsencrypt:/etc/letsencrypt \
chishin/nginx-proxy-manager-zh:latest
```

```yml [Compose]
services:
  nginx-proxy-manager:
    container_name: nginx-proxy-manager
    image: 'chishin/nginx-proxy-manager-zh:release'
    restart: always
    network_mode: host
    volumes:
      - /home/docker/nginx-proxy-manager/data:/data
      - /home/docker/nginx-proxy-manager/letsencrypt:/etc/letsencrypt
```
::::

## [迅雷远程下载（非官方）](https://github.com/cnk3x/xunlei)

从迅雷群晖套件中提取出来用于其他设备的迅雷远程下载服务程序。

:::: code-group

```bash [Docker Run]
docker run -d --restart=always --name=xunlei --net=host \
-e XL_DASHBOARD_PORT=8091 \
-v /home/docker/xunlei/data:/xunlei/data \
-v /home/media:/xunlei/downloads \
-v /home/media:/xunlei/media \
--privileged \
cnk3x/xunlei:latest
```

```yml [Compose]
services:
  xunlei:
    image: cnk3x/xunlei:latest
    container_name: xunlei
    restart: always
    network_mode: host 
    privileged: true
    volumes:
      - '/home/docker/xunlei/data:/xunlei/data'
      - '/home/downloads:/xunlei/downloads'
      - '/home/media:/xunlei/media'
    environment:
      - 'XL_DASHBOARD_PORT=8091'
```
::::

## [qbittorrent](https://github.com/linuxserver/docker-qbittorrent)

:::: code-group

```bash [Docker Run]
docker run -d --restart=always --name=qbittorrent --net=host \
-e PUID=0 -e PGID=0 -e TZ=Asia/ShangHai -e WEBUI_PORT=8090 \
-v /home/docker/qbittorrent/config:/config \
-v /home/media:/downloads \
linuxserver/qbittorrent:latest
```

```yml [Compose]
services:
  qbittorrent:
    image: linuxserver/qbittorrent:latest
    container_name: qbittorrent
    restart: always
    network_mode: host
    environment:
      - 'PUID=1000'
      - 'PGID=1000'
      - 'TZ=Asia/ShangHai'
      - 'WEBUI_PORT=8090'
      - 'TORRENTING_PORT=6881'
    volumes:
      - '/home/docker/qbittorrent/config:/config'
      - '/home/downloads:/downloads'
      - '/home/media:/media'
```
::::

## [Jellyfin](https://jellyfin.org/docs/general/installation/container/)

Jellyfin 是一个免费软件媒体系统，可让您控制管理和流式传输您的媒体。

容器运行后使用浏览器访问`http://<server-ip>:8096`端口。

:::: code-group

```bash [Docker Run]
docker run -d --restart=always --name=jellyfin --net=host \
-v /home/docker/jellyfin/config:/config \
-v /home/docker/jellyfin/cache:/cache \
-v /home/media:/media \
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


```yml [Compose]
services:
  jellyfin:
    container_name: jellyfin
    image: 'jellyfin/jellyfin:latest'
    restart: always
    network_mode: host
    extra_hosts:
      - 'www.themoviedb.org:3.166.244.31'
      - 'www.themoviedb.org:3.166.244.28'
      - 'www.themoviedb.org:3.166.244.54'
      - 'www.themoviedb.org:3.160.188.78'
      - 'image.tmdb.org:169.150.249.169'
      - 'image.tmdb.org:143.244.49.177'
      - 'api.themoviedb.org:31.13.76.99'
      - 'api.themoviedb.org:13.226.61.7'
      - 'api.themoviedb.org:103.246.246.144'
    volumes:
      - '/usr/share/fonts:/usr/share/fonts'
      - '/home/docker/jellyfin/config:/config'
      - '/home/docker/jellyfin/cache:/cache'
      - '/home/media:/media'
```
::::

## waline

```bash
wget https://github.com/walinejs/waline/blob/main/assets/waline.sqlite
docker run -d --name waline --restart=always --net=host \
-v /home/docker/waline:/app/data \
-e TZ=Asia/Shanghai \
-e SQLITE_PATH=/app/data \
-e JWT_TOKEN=xtl.0911 \
-e SITE_NAME=Waline \
-e SITE_URL=https://waline.sat911.top \
-e SECURE_DOMAINS=www.sat911.top,sat911.top \
-e AUTHOR_EMAIL=Satxm@outlook.com \
lizheming/waline
```
