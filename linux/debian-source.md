# Debian apt 换源

## 使用说明 {#1}

:::: warning 警告
**操作前请做好相应备份。**
::::

一般情况下，将 `/etc/apt/sources.list` 或 `/etc/apt/sources.list.d/debian.sources` 文件中 Debian 默认的源地址 `http://deb.debian.org/` 替换为 `http://mirrors.ustc.edu.cn` 即可。

可以使用如下命令：

:::: code-group

```bash [sources.list 格式]
sudo sed -i 's/deb.debian.org/mirrors.ustc.edu.cn/g' /etc/apt/sources.list
sudo sed -i -e 's|security.debian.org/\? |security.debian.org/debian-security |g' \
      -e 's|security.debian.org|mirrors.ustc.edu.cn|g' \
      -e 's|deb.debian.org/debian-security|mirrors.ustc.edu.cn/debian-security|g' \
      /etc/apt/sources.list
```

```bash [DEB822 格式]
sudo sed -i 's/deb.debian.org/mirrors.ustc.edu.cn/g' /etc/apt/sources.list.d/debian.sources
```
::::

目前使用 DEB822 格式的 Debian 分发仅有容器镜像，且其安全更新源默认设置为 `http://deb.debian.org/debian-security`，因此以上命令会同时替换 Debian 官方源和安全更新源。

:::: tip 提示

[什么是 DEB822 (.sources) 文件格式？]

自新版本的 Debian 与 Ubuntu 起，例如：
- Debian 12 的容器镜像
- Ubuntu 24.04

默认预装的系统中 APT 的系统源配置文件不再是传统的 `/etc/apt/sources.list`。
传统格式（又被称为 One-Line-Style 格式）类似如下：

```v
deb http://mirrors.ustc.edu.cn/debian/ bookworm main contrib
```

新的 DEB822 格式自 APT 1.1（2015 年发布）起支持，后缀为 `.sources`，存储在 `/etc/apt/sources.list.d/` 目录下，格式类似如下：

```yaml
Types: deb
URIs: https://mirrors.ustc.edu.cn/debian
Suites: bookworm
Components: main contrib
Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg
```

在切换软件源时，**需要根据实际情况选择对应的格式进行修改**。

关于 DEB822 格式的设计考虑，可以参考[官方文档（英文）](https://repolib.readthedocs.io/en/latest/deb822-format.html)。

::::

当然也可以直接编辑 APT 源文件（需要使用 sudo）。以下是参考配置内容：

## Debian 12 {#2}

:::: code-group
```vim [sources.list 格式]
# 默认注释了源码仓库，如有需要可自行取消注释
deb http://mirrors.ustc.edu.cn/debian bookworm main contrib non-free non-free-firmware
# deb-src http://mirrors.ustc.edu.cn/debian bookworm main contrib non-free non-free-firmware
deb http://mirrors.ustc.edu.cn/debian bookworm-updates main contrib non-free non-free-firmware
# deb-src http://mirrors.ustc.edu.cn/debian bookworm-updates main contrib non-free non-free-firmware

# backports 软件源，请按需启用
# deb http://mirrors.ustc.edu.cn/debian bookworm-backports main contrib non-free non-free-firmware
# deb-src http://mirrors.ustc.edu.cn/debian bookworm-backports main contrib non-free

# debian-security 软件源
deb http://mirrors.ustc.edu.cn/debian-security/ bookworm-security main contrib non-free non-free-firmware
# deb-src http://mirrors.ustc.edu.cn/debian-security/ bookworm-security main contrib non-free non-free-firmware
```

```yaml [DEB822 格式]
Types: deb
URIs: http://mirrors.ustc.edu.cn/debian
Suites: bookworm bookworm-updates
Components: main contrib non-free non-free-firmware
Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg

Types: deb
URIs: http://mirrors.ustc.edu.cn/debian-security
Suites: bookworm-security
Components: main contrib non-free non-free-firmware
Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg
```
::::

## Debian 11 {#3}

:::: code-group
```vim [sources.list 格式]
# 默认注释了源码仓库，如有需要可自行取消注释
deb http://mirrors.ustc.edu.cn/debian bullseye main contrib non-free
# deb-src http://mirrors.ustc.edu.cn/debian bullseye main contrib non-free
deb http://mirrors.ustc.edu.cn/debian bullseye-updates main contrib non-free
# deb-src http://mirrors.ustc.edu.cn/debian bullseye-updates main contrib non-free

# backports 软件源，请按需启用
# deb http://mirrors.ustc.edu.cn/debian bullseye-backports main contrib non-free
# deb-src http://mirrors.ustc.edu.cn/debian bullseye-backports main contrib non-free

# debian-security 软件源
deb http://mirrors.ustc.edu.cn/debian-security/ bullseye-security main contrib non-free
# deb-src http://mirrors.ustc.edu.cn/debian-security/ bullseye-security main contrib non-free
```

```yaml [DEB822 格式]
Types: deb
URIs: http://mirrors.ustc.edu.cn/debian
Suites: bullseye bullseye-updates
Components: main contrib non-free
Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg

Types: deb
URIs: http://mirrors.ustc.edu.cn/debian-security
Suites: bullseye-security
Components: main contrib non-free
Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg
```
::::
