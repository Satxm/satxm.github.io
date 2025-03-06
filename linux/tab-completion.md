# 启用 Tab 补全

1、安装 `bash-completion` 软件包

```bash
sudo apt install bash-completion
```

2、修改 `/etc/bash.bashrc` 文件（需要root权限，全局）或 `~/.bashrc` 文件

::: code-group

```v [/etc/bash.bashrc]
# enable bash completion in interactive shells
# if ! shopt -oq posix; then // [!code --]
#   if [ -f /usr/share/bash-completion/bash_completion ]; then // [!code --]
#     . /usr/share/bash-completion/bash_completion // [!code --]
#   elif [ -f /etc/bash_completion ]; then // [!code --]
#     . /etc/bash_completion // [!code --]
#   fi // [!code --]
# fi // [!code --]
if ! shopt -oq posix; then // [!code ++]
  if [ -f /usr/share/bash-completion/bash_completion ]; then // [!code ++]
    . /usr/share/bash-completion/bash_completion // [!code ++]
  elif [ -f /etc/bash_completion ]; then // [!code ++]
    . /etc/bash_completion // [!code ++]
  fi // [!code ++]
fi // [!code ++]
```

```v [~/.bashrc]
# enable programmable completion features (you don't need to enable
# this, if it's already enabled in /etc/bash.bashrc and /etc/profile
# sources /etc/bash.bashrc).
# if [ -f /etc/bash_completion ] && ! shopt -oq posix; then // [!code --]
#     . /etc/bash_completion // [!code --]
# fi // [!code --]
if [ -f /etc/bash_completion ] && ! shopt -oq posix; then // [!code ++]
    . /etc/bash_completion // [!code ++]
fi // [!code ++]
```
:::

3、最后 source 重载 `/etc/bash.bashrc` 文件或用户目录 `.bashrc` 文件

```bash
source /etc/bash.bashrc
source .bashrc
```
