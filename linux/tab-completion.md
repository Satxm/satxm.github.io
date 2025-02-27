
# 启用 Tab 补全

1、安装 ```bash-completion``` 软件包

```bash
sudo apt install bash-completion
```

2、修改 ```/etc/bash.bashrc``` 文件（需要root权限）或 `~/.bashrc` 文件

<!-- tabs:start -->

#### **/etc/bash.bashrc**

```bash
sudo vim /etc/bash.bashrc 
```
找到文件中的下列代码

```vim
# enable bash completion in interactive shells
# if ! shopt -oq posix; then
#   if [ -f /usr/share/bash-completion/bash_completion ]; then
#     . /usr/share/bash-completion/bash_completion
#   elif [ -f /etc/bash_completion ]; then
#     . /etc/bash_completion
#   fi
# fi
```

将注释符号#去掉，即改成

```vim
# enable bash completion in interactive shells
if ! shopt -oq posix; then
  if [ -f /usr/share/bash-completion/bash_completion ]; then
    . /usr/share/bash-completion/bash_completion
  elif [ -f /etc/bash_completion ]; then
    . /etc/bash_completion
  fi
fi
```

#### **~/.bashrc**

```bash 
vim ~/.bashrc
```

找到文件中的下列代码

```vim
# enable programmable completion features (you don't need to enable
# this, if it's already enabled in /etc/bash.bashrc and /etc/profile
# sources /etc/bash.bashrc).
# if [ -f /etc/bash_completion ] && ! shopt -oq posix; then
#     . /etc/bash_completion
# fi
```
将注释符号#去掉，即改成

```vim
# enable programmable completion features (you don't need to enable
# this, if it's already enabled in /etc/bash.bashrc and /etc/profile
# sources /etc/bash.bashrc).
if [ -f /etc/bash_completion ] && ! shopt -oq posix; then
    . /etc/bash_completion
fi
```

<!-- tabs:end -->

3、最后 source 重载 ```/etc/bash.bashrc``` 文件或用户目录 ```.bashrc``` 文件

```bash
source /etc/bash.bashrc
source .bashrc
```
