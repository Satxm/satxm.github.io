# 删除 Snap 软件包

## 1、查看已经安装的 Snap 软件包的列表

它显示了 Snap 软件包，比如 Firefox，软件商店，主题以及其它默认已经安装的核心软件包。

```bash
sudo snap list
```

输出结果如下（Ubuntu 24.04.2 LTS）

![](/imgs/1710545114222.webp)

## 2、按照以下的顺序移除 Snap 软件包

首先移除 Firefox，然后是软件商店和上述命令看到的你的系统中的其它软件包。

```bash
sudo snap remove --purge firefox
sudo snap remove --purge snap-store
sudo snap remove --purge gnome-42-2204
sudo snap remove --purge gtk-common-themes
sudo snap remove --purge snapd-desktop-integration
sudo snap remove --purge firmware-updater
sudo snap remove --purge bare
sudo snap remove --purge core22
sudo snap remove --purge snapd
```

## 3、最后，通过 apt 命令移除 Snap 服务

```bash
sudo apt purge snapd
sudo apt autopurge
```

即使用以上命令移除了 Snap 软件包，但是如果你没有关闭 apt 触发器，sudo apt update 命令会再一次将 Snap 安装回来。

## 4、禁用 Snap 服务

在 /etc/apt/preferences.d/ 目录下创建一个 apt 配置文件 nosnap 来禁用 Snap 服务。

```bash
echo '
Package: snapd
Pin: release a=*
Pin-Priority: -10
' | sudo tee /etc/apt/preferences.d/nosnap
```

在以上的内容中，Pin-Priority -10 意思就是阻止 Snap 软件包的安装。

```bash
sudo apt update
```

## 5、安装 apt 版 GNOME 软件商店

保使用 `--install-suggests` 参数。否则，将会再次安装上 Snap 版本的软件包管理器！

```bash
sudo apt install --install-suggests gnome-software
```

## 6、安装 deb 版 Firefox

使用官方仓库进行安装，参考[官方教程](https://support.mozilla.org/zh-CN/kb/install-firefox-linux)。

### 导入 Mozilla 签名密钥

```bash
install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://packages.mozilla.org/apt/repo-signing-key.gpg | sudo gpg --dearmor -o /etc/apt/keyrings/mozilla.gpg
sudo chmod a+r /etc/apt/keyrings/mozilla.gpg
```

### 把 Mozilla 库添加到源列表中

```bash
echo \
"deb [signed-by=/etc/apt/keyrings/mozilla.gpg] https://packages.mozilla.org/apt mozilla main" | \
sudo tee /etc/apt/sources.list.d/firefox.list > /dev/null
```

### 配置优先使用 Mozilla 库中的包

```bash
echo '
Package: *
Pin: origin packages.mozilla.org
Pin-Priority: 1000
' | sudo tee /etc/apt/preferences.d/mozilla
```

### 安装 Firefox 的 .deb 包

```bash
sudo apt update
sudo apt install firefox
```
### 使用 .deb 包设置 Firefox 语言

```bash
sudo apt install firefox-l10n-zh-cn
```

## 在 Ubuntu 系统恢复到 Snap 软件包
如果你改变想法，移除该设置文件，并通过以下命令再次启动安装程序。

```bash
sudo rm /etc/apt/preferences.d/nosnap
sudo apt update
sudo apt upgrade
sudo snap install snap-store
sudo apt install firefox
```

原链接 https://linux.cn/article-14567-1.html
