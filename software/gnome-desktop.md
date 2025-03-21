# Gnome 桌面快捷方式相关

## 创建快捷方式

Gnome是一种流行的桌面环境。如果你想要在 Gnome 桌面环境下创建桌面快捷方式，可以按照以下步骤进行操作：

### 1、安装插件

你需要安装一个名为 `gnome-shell-extension-desktop-icons-ng` 的扩展插件，它将允许你在桌面上显示图标和创建快捷方式。

```bash
sudo apt update
sudo apt install gnome-shell-extension-desktop-icons-ng -y
```

### 2、重启系统

安装完成后，重启你的系统以使扩展生效。

### 3、启用插件

重启后，打开 Gnome 的扩展应用程序，找到并启用 Desktop Icons NG 扩展。然后，点击扩展的设置按钮，进行相关的配置。

### 4、创建快捷方式

#### 方法一：

使用 `ln -s` 命令来创建一个指向目标文件的符号链接，作为桌面快捷方式。

```bash
ln -s [目标文件路径] [快捷方式路径]
ln -s /bin/im-config $HOME/Desktop/im-config
```

#### 方法二（推荐）：

使用 `cp` 命令来复制一个 `.desktop`，作为桌面快捷方式。

```bash
cp /usr/share/applications/im-config.desktop $HOME/Desktop/
```

## 解决快捷方式无法运行

右键桌面的 `.desktop` 文件，选择【允许运行】，之后图标不再为灰色即可运行。