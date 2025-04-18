
# 修改 tty/ssh 显示信息


## 输出内核信息

`/etc/update-motd.d/` 目录下，数字越小运行越早，该目录下可输出系统信息、输出内核信息、运行自定义脚本等

```bash
echo '#!/bin/sh

[ -r /etc/lsb-release ] && . /etc/lsb-release

if [ -x /usr/bin/lsb_release ]; then
        # Fall back to using the very slow lsb_release utility
        LSBI=$(lsb_release -s -i)
        LSBR=$(lsb_release -s -r)
fi

printf "Welcome to %s %s (%s %s %s)\n" "$LSBI" "$LSBR" "$(uname -o)" "$(uname -r)" "$(uname -m)"
' | sudo tee /etc/update-motd.d/00-header
sudo chmod +x /etc/update-motd.d/00-header
```

输出结果（以 Debian 12 为示例）

```bash
Welcome to Debian 12 (GNU/Linux 6.1.0-23-amd64 x86_64)
```

## 显示用户自定义信息

`/etc/profile.d/motd.sh` 目录下，数字越小运行越早，该目录下可输出系统信息、输出内核信息、运行自定义脚本等

```bash
echo '#!/bin/sh

[ -r /etc/lsb-release ] && . /etc/lsb-release

if [ -x /usr/bin/lsb_release ]; then
        # Fall back to using the very slow lsb_release utility
        LSBI=$(lsb_release -s -i)
        LSBR=$(lsb_release -s -r)
fi

printf "# Welcome to \033[1;36m%s,\033[0m you are logged in as \033[1;20m%s\033[0m\n" "$(hostname -s)" "$(whoami)"
printf "# This system is running \033[1;32m%s %s\033[0m (\033[1;33m%s %s %s\033[0m)\n" "$LSBI" "$LSBR" "$(uname -o)" "$(uname -r)" "$(uname -m)"
free -m | awk '\''NR==2 {printf "# Memory usage: \033[1;35m%.1fGB/%.1fGB %.2f%%\033[0m  ", $3/1000,$2/1000,$3*100/$2}'\''
df -h | awk '\''$NF=="/" {printf "  Disk usage: \033[1;35m%.1fGB/%.1fGB %s\033[0m\n", $3,$2,$5}'\''
' | sudo tee /etc/profile.d/motd.sh > /dev/null
sudo chmod +x /etc/profile.d/motd.sh
```

输出结果（以 Debian 12 为示例）

```bash
# Welcome to Debian, you are logged in as root
# This system is running Debian 12 (GNU/Linux 6.1.0-32-amd64 x86_64)
```

## 修改自定义欢迎语

修改 `/etc/motd` 文件，该文件不可运行脚本，仅输出文本

```bash 
echo "
Welcome to $(lsb_release -s -i) ($(uname -o)) Server!
" | sudo tee /etc/motd > /dev/null
```

输出结果（以 Debian 12 为示例）

```bash
Welcome to Debian (GNU/Linux) Server!
```
