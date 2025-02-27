
# 启用命令的别名

让 Debian 支持 ll 等命令的别名，需要修改用户目录下面的.bashrc 配置文件

```bash
cd ~  #进入当前用户目录
vim .bashrc  #使用vim 编辑.bashrc配置文件
```

<!-- tabs:start -->

#### **root**

找到这样几行 

```vim
# You may uncomment the following lines if you want `ls' to be colorized:
# export LS_OPTIONS='--color=auto'
# eval "`dircolors`"
# alias ls='ls $LS_OPTIONS'
# alias ll='ls $LS_OPTIONS -l'
# alias l='ls $LS_OPTIONS -lA' 
```

把相关行前面的#号去掉，如下

```vim
# You may uncomment the following lines if you want `ls' to be colorized:
export LS_OPTIONS='--color=auto'
eval "`dircolors`"
alias ls='ls $LS_OPTIONS'
alias ll='ls $LS_OPTIONS -l'
alias l='ls $LS_OPTIONS -lA'
```
#### **user**

找到这样几行 

```vim
# some more ls aliases
#alias ll='ls -l'
#alias la='ls -A'
#alias l='ls -CF'
```

把相关行前面的#号去掉，如下

```vim
# some more ls aliases
alias ll='ls -l'
alias la='ls -A'
alias l='ls -CF'
```

<!-- tabs:end -->

然后 `wq!` 保存退出，

执行 `source` 命令重新载入 `bashrc`

```bash
source .bashrc
```
