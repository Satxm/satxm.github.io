# Daocker 镜像

## [Dpanel](https://dpanel.cc/#/zh-cn/install/docker)

轻量化的 Docker 可视化管理面板，提供完善的容器管理功能。

::: code-group

```bash [Docker Run]
docker run -d --name dpanel --restart=always \
--net=host -e APP_NAME=dpanel \
-v /var/run/docker.sock:/var/run/docker.sock -v /var/docker/dpanel:/dpanel \
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
      - /var/run/docker.sock:/var/run/docker.sock
      - ./dpanel:/dpanel
```

:::

## [nginx-proxy-manager-zh](https://github.com/xiaoxinpro/nginx-proxy-manager-zh)

[官方网站](https://nginxproxymanager.com/)

它可以让你轻松地部署到你的网站上运行，包括免费的SSL，而不需要知道太多关于 Nginx 或 Let's Encrypt 的信息。


::: code-group

```bash [Docker Run]
docker run -d --name nginx-proxy-manager --restart=always \
--net=host -v /var/docker/nginx-proxy-manager/data:/data \
-v /var/docker/nginx-proxy-manager/letsencrypt:/etc/letsencrypt \
chishin/nginx-proxy-manager-zh:latest
```

```yml [Compose]
version: '3'
services:
  nginx-proxy-manager:
    container_name: dpanel
    image: 'chishin/nginx-proxy-manager-zh:release'
    restart: always
    network_mode: host
    volumes:
      - ./data:/data
      - ./letsencrypt:/etc/letsencrypt
```

::: 

## xunlei

```bash
docker run -d --restart=always --name=xunlei --net=host \
-e XL_DASHBOARD_PORT=8091 \
-v /var/docker/xunlei/data:/xunlei/data \
-v /var/media:/xunlei/downloads --privileged \
cnk3x/xunlei:latest
```

## qbittorrent

```bash
docker run -d --restart=always --name=qbittorrent --net=host \
-e PUID=0 -e PGID=0 -e TZ=Asia/ShangHai -e WEBUI_PORT=8090 \
-v /var/docker/qbittorrent/config:/config \
-v /var/media:/downloads \
linuxserver/qbittorrent:latest
```

## jellyfin

::: code-group

```bash [Docker Run]
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
```


```yml [Compose]
version: '3'
services:
  jellyfin:
    image: 'jellyfin/jellyfin:latest'
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
      - '/var/media:/media'
      - './config:/config'
      - './cache:/cache'
    container_name: jellyfin
    restart: always
```
:::

## waline

```bash
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
```
