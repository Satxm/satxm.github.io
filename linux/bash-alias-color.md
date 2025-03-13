# 启用命令的别名和颜色

## 启用命令的别名

让 Debian 支持 ll 等命令的别名，需要修改用户目录下面的.bashrc 配置文件

```bash
vim ~/.bashrc
```

找到这样几行 

```v [~/.bashrc]
# some more ls aliases
#alias ll='ls -l' // [!code --]
#alias la='ls -A' // [!code --]
#alias l='ls -CF' // [!code --]
alias ll='ls -l' // [!code ++]
alias la='ls -A' // [!code ++]
alias l='ls -CF' // [!code ++]
```

执行 `source` 命令重新载入 `bashrc`

```bash
source ~/.bashrc
```

## 启用命令行颜色

让 Debian 支持 ll 等命令的颜色输出，需要修改用户目录下面的.bashrc 配置文件

```bash
vim ~/.bashrc
```

:::: code-group

```v [Root]
# You may uncomment the following lines if you want `ls' to be colorized:
# export LS_OPTIONS='--color=auto' // [!code --]
# eval "`dircolors`" // [!code --]
# alias ls='ls $LS_OPTIONS' // [!code --]
# alias ll='ls $LS_OPTIONS -l' // [!code --]
# alias l='ls $LS_OPTIONS -lA' // [!code --]
export LS_OPTIONS='--color=auto' // [!code ++]
eval "`dircolors`" // [!code ++]
alias ls='ls $LS_OPTIONS' // [!code ++]
alias ll='ls $LS_OPTIONS -l' // [!code ++]
alias l='ls $LS_OPTIONS -lA' // [!code ++]
```

```v [User]
# enable color support of ls and also add handy aliases
if [ -x /usr/bin/dircolors ]; then
    test -r ~/.dircolors && eval "$(dircolors -b ~/.dircolors)" || eval "$(dircolors -b)"
    alias ls='ls --color=auto'
    #alias dir='dir --color=auto' // [!code --]
    #alias vdir='vdir --color=auto' // [!code --]
    alias dir='dir --color=auto' // [!code ++]
    alias vdir='vdir --color=auto' // [!code ++]

    #alias grep='grep --color=auto' // [!code --]
    #alias fgrep='fgrep --color=auto' // [!code --]
    #alias egrep='egrep --color=auto' // [!code --]
    alias grep='grep --color=auto' // [!code ++]
    alias fgrep='fgrep --color=auto' // [!code ++]
    alias egrep='egrep --color=auto' // [!code ++]
fi

# colored GCC warnings and errors
#export GCC_COLORS='error=01;31:warning=01;35:note=01;36:caret=01;32:locus=01:quote=01' // [!code --]
export GCC_COLORS='error=01;31:warning=01;35:note=01;36:caret=01;32:locus=01:quote=01' // [!code ++]
```
::::

执行 `source` 命令重新载入 `bashrc`

```bash
source ~/.bashrc
```
