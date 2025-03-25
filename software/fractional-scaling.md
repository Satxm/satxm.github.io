# Gnome 分数缩放支持

Debian / Ubuntu 对于一些高分辨率屏幕，系统默认只有100%和200%的选项，解决方法如下。

## 桌面设置 (Gnome)

首先，您需要知道您运行的是 X11 还是 Wayland：

```bash 
echo $XDG_SESSION_TYPE
```

根据 `echo $XDG_SESSION_TYPE` 的输出决定你使用 X11 还是 Wayland 的命令：

:::: code-group
```bash [wayland]
gsettings set org.gnome.mutter experimental-features "['scale-monitor-framebuffer']"
```

```bash [x11]
gsettings set org.gnome.mutter experimental-features "['x11-randr-fractional-scaling']"
```
::::

要禁用分数缩放：

```bash
gsettings reset org.gnome.mutter experimental-features
```

## 登录屏幕 (GDM)

首先，您需要知道您运行的是 X11 还是 Wayland：

```bash 
echo $XDG_SESSION_TYPE
```

查找你的系统中的 GDM 用户

```bash
awk -F':' '{ print $1}' /etc/passwd | grep gdm
```

将您的显示器设置复制到 GDM 用户，并在每次更改帐户中的显示设置时重复此步骤：

根据你的 GDM 用户 修改命令中 GDM 用户名

:::: code-group
```bash [gdm]
sudo cp ~/.config/monitors.xml ~gdm/.config/monitors.xml
sudo chown gdm:gdm ~gdm/.config/monitors.xml
```

```bash [Debian-gdm]
sudo cp ~/.config/monitors.xml ~Debian-gdm/.config/monitors.xml
sudo chown Debian-gdm:Debian-gdm ~Debian-gdm/.config/monitors.xml
```
::::

访问 GDM 的 shell

:::: code-group
```bash [gdm]
sudo machinectl shell gdm@ /bin/bash
```

```bash [Debian-gdm]
sudo machinectl shell Debian-gdm@ /bin/bash
```
::::

如果上述命令无法运行，请确保 `systemd-container` 已经安装。

根据 `echo $XDG_SESSION_TYPE` 的输出决定你使用 X11 还是 Wayland 的命令：

:::: code-group
```bash [wayland]
gsettings set org.gnome.mutter experimental-features "['scale-monitor-framebuffer']"
```

```bash [x11]
gsettings set org.gnome.mutter experimental-features "['x11-randr-fractional-scaling']"
```
::::


要禁用分数缩放：

```bash
gsettings reset org.gnome.mutter experimental-features
```
