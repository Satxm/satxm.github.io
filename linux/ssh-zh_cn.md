
# SSH连接时更换为中文

`vim .bashrc` 或 `sudo vim /etc/bash.bashrc` 添加以下内容，以便SSH连接后切换中文

```vim 
# Change Language to zh-CN when SSH connected:
if [[ -n $SSH_CONNECTION ]] ; then
    export LANG="zh_CN.UTF-8"
    export LANGUAGE="zh_CN:zh"
fi
```

```bash
source /etc/bash.bashrc
source .bashrc
```

如果上述设置无效，检查 `.profile ` 文件，删掉末尾这几行后再重新登录，能正常显示中文了。

```vim
# Installed by Debian Installer:"
#  no localization for root because zh_CN.UTF-8"
#  cannot be properly displayed at the Linux console"
LANG=C
LANGUAGE=C
```
