
# 启用 sudo 权限

## 方法一：直接加入 sudo 用户组

为了防止出现 `bash: usermod: command not found` 或 `bash: usermod: 未找到命令` 错误，需要用 `su - root` 或 `su -` 命令切换到 `root` 命令，`su -` 命令能获取 `root` 用户的环境变量，才能使用 `usermod` 指令。

```bash
su -
usermod -aG sudo <user>
```

:::: tip

`su` 命令和 `su -` 命令区别：

`su` 只是切换了 `root` 用户身份，但 Shell 环境仍然是之前普通用户的 Shell；

而 `su -` 连用户身份和 Shell 环境一起切换成 `root` 用户身份了。

只有切换了 Shell 环境才不会出现环境变量错误，报 `command not found` 或 `未找到命令` 错误。

用 `echo $PATH` 命令看一下 `su` 和 `su -` 后的环境变量已经变了。

::::

## 方法二：编辑 `/etc/sudoers` 文件

`visudo` 可以安全的编辑 `/etc/sudoers` 文件，虽然也可以直接使用 `vi` 来编辑 `sudoers` 文件，但是其最大的区别在于 `visudo` 在保存文件的时候会自动的检测语法错误，如果使用 `vi /etc/sudoers` 直接编辑 `sudoers` 的话，可能出现语法错误，但是使用 `visudo` 却可以避免因为语法出错而保存了一个错误的 `souders` 文件。

### 1. 判断是否安装了 `sudo`
要使用 `visudo`，首先你必须安装了 `sudo`，如果你已经安装了 `sudo`，但是在使用 `visudo` 的时候提示 `visudo: command not found`，那么首先确认你的 `sudo` 已经安装，使用下面的命令检测`sudoers` 是否存在：

```bash
> whereis sudoers
sudoers: /etc/sudoers /usr/share/man/man5/sudoers.5.gz
```

如果你的sudoers文件存在，使用下面的命令确认并发现visudo文件的路径：

```bash
>whereis visudo
visudo: /usr/bin/visudo /usr/sbin/visudo /usr/share/man/man8/visudo.8.gz
```

如果上面的命令没有输出任何结果，请重新安装 `sudo`；如果 `visudo` 存在。那么可以肯定的是系统变量`$PATH`的问题了，在 `PATH` 中的任意一个路径增加 `visudo` 的软连接：

```bash
ln -s /usr/sbin/visudo /usr/bin/visudo
```

### 2.编辑 sudoers 文件

```bash
sudo visudo
```

在编辑器中向下滚动，直到您看到```User privilege specification```部分。

在该部分下方添加用户名行。

```vim
# User privilege specification
root    ALL=(ALL:ALL) ALL
<user>  ALL=(ALL:ALL) ALL
```

**或**在编辑器中向下滚动，直到您看到```Allow members of group sudo to execute any command```部分。

在该部分下方添加用户组行。

```vim
# Allow members of group sudo to execute any command
%sudo	ALL=(ALL:ALL) ALL
%wheel	ALL=(ALL:ALL) ALL
```
