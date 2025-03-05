
# 修改 tty/ssh 显示信息

`/etc/update-motd.d/` 目录下，数字越小运行越早，该目录下可输出系统信息、输出内核信息、运行自定义脚本等

## 输出内核信息

```bash
sudo vim /etc/update-motd.d/00-header 
sudo chmod +x /etc/update-motd.d/00-header
```

```vim
#!/bin/sh

[ -r /etc/lsb-release ] && . /etc/lsb-release

if [ -x /usr/bin/lsb_release ]; then
        # Fall back to using the very slow lsb_release utility
        LSBI=$(lsb_release -s -i)
        LSBR=$(lsb_release -s -r)
fi

printf "Welcome to %s %s (%s %s %s)\n" "$LSBI" "$LSBR" "$(uname -o)" "$(uname -r)" "$(uname -m)"
```

输出结果（以 Debian 12 为示例）

```bash
Welcome to Debian 12 (GNU/Linux 6.1.0-23-amd64 x86_64)
```

## 修改自定义欢迎语

修改 `/etc/motd` 文件，该文件不可运行脚本，仅输出文本

```bash 
sudo vim /etc/motd
```
