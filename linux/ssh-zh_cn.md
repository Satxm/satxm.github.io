
# SSH 连接时更换为中文

修改 `~/.bashrc` 或 `/etc/bash.bashrc` 添加以下内容

## Debian

:::code-group

```bash [仅 TTY 切换英文]
echo '
# Change Language to en-US when use TTY:
if [[ -z $(tty | grep pts) ]] ; then
    export LANG="en_US.UTF-8"
    export LANGUAGE="en_US:en"
fi
' | sudo tee -a /etc/bash.bashrc > /dev/null
```

```bash [SSH 和终端切换中文]
echo '
# Change Language to zh-CN when SSH and Terminal:
if [[ -n $(tty | grep pts) ]] ; then
    export LANG="zh_CN.UTF-8"
    export LANGUAGE="zh_CN:zh"
fi
' | sudo tee -a /etc/bash.bashrc > /dev/null
```

```bash [SSH 切换中文]
echo '
# Change Language to zh-CN when SSH connected:
if [[ -n $SSH_CONNECTION ]] ; then
    export LANG="zh_CN.UTF-8"
    export LANGUAGE="zh_CN:zh"
fi
' | sudo tee -a /etc/bash.bashrc > /dev/null
```
::::

如果上述设置无效，检查 `~/.profile ` 文件，删掉末尾这几行后再重新登录，能正常显示中文了。

```v
# Installed by Debian Installer:" // [!code --]
#  no localization for root because zh_CN.UTF-8" // [!code --]
#  cannot be properly displayed at the Linux console" // [!code --]
LANG=C // [!code --]
LANGUAGE=C // [!code --]
```

## Ubuntu

:::code-group

```bash [/etc/bash.bashrc]
echo '
# Change Language to zh-CN when SSH connected:
if [[ -n $SSH_CONNECTION ]] ; then
    export LANG="zh_CN.UTF-8"
fi
' | sudo tee -a /etc/bash.bashrc > /dev/null
source /etc/bash.bashrc
```

```bash [~/.bashrc]
echo '
# Change Language to zh-CN when SSH connected:
if [[ -n $SSH_CONNECTION ]] ; then
    export LANG="zh_CN.UTF-8"
fi
' | tee -a ~/.bashrc > /dev/null
source ~/.bashrc
```
::::

## Fedora

:::code-group

```bash [/etc/bash.bashrc]
echo '
# Change Language to zh-CN when SSH connected:
if [[ -n $SSH_CONNECTION ]] ; then
    export LANG="zh_CN.UTF-8"
fi
' | tee -a /etc/bash.bashrc > /dev/null
source /etc/bash.bashrc
```

```bash [~/.bashrc]
echo '
# Change Language to zh-CN when SSH connected:
if [[ -n $SSH_CONNECTION ]] ; then
    export LANG="zh_CN.UTF-8"
fi
' | tee -a ~/.bashrc > /dev/null
source ~/.bashrc
```
::::
