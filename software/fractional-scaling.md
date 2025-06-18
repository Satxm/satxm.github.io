# 分数缩放支持

Debian / Ubuntu 对于一些高分辨率屏幕，系统默认只有100%和200%的选项，解决方法如下。

## 桌面设置 (Gnome) {#Gnome}

首先，您需要知道您运行的是 X11 还是 Wayland：

```bash 
echo $XDG_SESSION_TYPE
```

根据 `echo $XDG_SESSION_TYPE` 的输出决定你使用 Wayland 还是 X11 的分数缩放启用命令：

:::: code-group
```bash [Wayland]
gsettings set org.gnome.mutter experimental-features "['scale-monitor-framebuffer']"
```

```bash [Wayland (Gnome 47+)]
gsettings set org.gnome.mutter experimental-features "['scale-monitor-framebuffer', 'xwayland-native-scaling']"
```

```bash [X11]
gsettings set org.gnome.mutter experimental-features "['x11-randr-fractional-scaling']"
```
::::

:::: tip

2024年5月中旬，Gnome 官方对其窗口管理器 mutter 有一个尚未合并的 XWayland 分数倍缩放补丁，在 [GNOME/mutter/merge_requests-3567](https://gitlab.gnome.org/GNOME/mutter/-/merge_requests/3567) 可以解决 XWayland 窗口缩放后的模糊问题。Gnome 47+ 已经内置了 XWayland 分数倍清晰缩放功能。

::::

要禁用分数缩放：

```bash
gsettings reset org.gnome.mutter experimental-features
```

## 登录屏幕 (GDM) {#GDM}

查找你的系统中的 GDM 用户

```bash
awk -F':' '{ print $1}' /etc/passwd | grep gdm
```

将您的显示器设置复制到 GDM 用户，并在每次更改帐户中的显示设置时重复此步骤：

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

访问 GDM 的 Shell 之后，参考[桌面设置](#Desktop)输入命令。

## 桌面设置 (Gnome) {#KDE}

### X-11

:::: code-group
```bash [设置 150]
kwriteconfig6 --file kdeglobals --group KScreen --key ScaleFactor 1.5
kwriteconfig6 --file kcmfonts --group General --key forceFontDPI 144
kwriteconfig6 --file kwinrc --group Xwayland --key Scale 1.5
```

```bash [恢复默认]
kwriteconfig6 --file kdeglobals --group KScreen --key ScaleFactor 1
kwriteconfig6 --file kcmfonts --group General --key forceFontDPI 96
kwriteconfig6 --file kwinrc --group Xwayland --key Scale 1
```
:::

多显示器 

在 `终端` 中运行 `xrandr` 获取显示器信息

```bash
kwriteconfig6 --file kdeglobals --group KScreen --key ScreenScaleFactors 'DisplayPort-1=1.75;DisplayPort-2=1.75;DisplayPort-3=1.75;HDMI-A-2=1.75;'
```

### Wayland

在 `系统设置 → 显示器配置` 中修改，或直接修改配置文件

```bash
echo '[
  {
    "data": [
      {
        "connectorName": "Virtual-1",
        "scale": 1.5
      }
    ],
    "name": "outputs"
  },
  {
    "data": [
      {
        "outputs": [
        ]
      }
    ],
    "name": "setups"
  }
]
' | tee $HOME/.config/kwinoutputconfig.json > /dev/null
```

## 登录屏幕 (SDDM) {#SDDM}

:::: code-group
```bash [设置 150]
echo '[General]
GreeterEnvironment=QT_SCREEN_SCALE_FACTORS=1.5
' | sudo tee /etc/sddm.conf.d/hidpi.conf > /dev/null
```

```bash [恢复默认]
sudo rm -rf /etc/sddm.conf.d/hidpi.conf
```
:::
