# 修改 $HOME 下默认目录名

装好了一个简体中文的Linux发行版，一般 $HOME 目录下面都默认会有桌面、模板、音乐、公共、视频、文档、下载、图片等目录，有些发行版中，这些目录名字是中文的，有些是英文的。

其实这些目录是由 http://freedesktop.org 定义的，由 `xdg-user-dirs` 程序来管理，其主页为：[xdg-user-dirs](https://freedesktop.org/wiki/Software/xdg-user-dirs/) 。

安装这个程序后，用默认文件管理器进入主目录后，可以看见不同的默认目录，会有不同的图标，一般的图标主题都会为这几个默认目录设定与普通目录不同的图标。


其主要配置文件为 `$HOME/.config/user-dirs.dirs` ，其内容一般定为

```txt
XDG_DESKTOP_DIR="$HOME/Desktop"
XDG_DOWNLOAD_DIR="$HOME/Downloads"
XDG_TEMPLATES_DIR="$HOME/Templates"
XDG_PUBLICSHARE_DIR="$HOME/Public"
XDG_DOCUMENTS_DIR="$HOME/Documents"
XDG_MUSIC_DIR="$HOME/Music"
XDG_PICTURES_DIR="$HOME/Pictures"
XDG_VIDEOS_DIR="$HOME/Videos"
```

另一个为 `$HOME/.config/user-dirs.locale` ，其内容一般定为

```txt
zh_CN
```

以上两个配置文件在运行 `xdg-user-dirs-update` 后会自动生成。


## 方法一

先运行 `xdg-user-dirs-update` 命令，然后修改 `$HOME/.config/user-dirs.dirs` 文件，将其中的中文目录改为英文目录。

## 方法二

先删除 `$HOME/.config/user-dirs.dirs` 文件，临时切换语言，让其重新生成配置文件。

```bash
rm -rf $HOME/.config/user-dirs.dirs
export LANG=en_US.UTF8
xdg-user-dirs-update
export LANG=zh_CN.UTF8
```
