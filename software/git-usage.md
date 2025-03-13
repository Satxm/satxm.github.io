# Git 设置

## 设置 Git 用户信息
安装完 Git 之后，第一件事就是设置你的用户名和邮件地址。
这一点很重要，因为每一个 Git 提交都会使用这些信息，它们会写入到你的每一次提交中，不可更改：

```bash
git config --global user.name <username> # 全局配置
git config --global user.email <email> # 全局配置
```

再次强调，如果使用了 `--global` 选项，那么该命令只需要运行一次，因为之后无论你在该系统上做任何事情， Git 都会使用那些信息。
当你想针对特定项目使用不同的用户名称与邮件地址时，可以在那个项目目录下运行没有 --global 选项的命令来配置。

## 生成 SSH 公钥

许多 Git 服务器都使用 SSH 公钥进行认证。
首先，你需要确认自己是否已经拥有密钥。默认情况下，用户的 SSH 密钥存储在其 `~/.ssh`(Linux) 或`%USERPROFILE%\.ssh`(Widows) 目录下。进入该目录并列出其中内容，你便可以快速确认自己是否已拥有密钥：

:::: code-group

```bash [Linux]
cd ~/.ssh
ls

authorized_keys  id_rsa  id_rsa.pub  known_hosts
```
```batch [Windows]
cd /d %USERPROFILE%\.ssh
dir /b

authorized_keys
id_rsa
id_rsa.pub
known_hosts
```
::::

我们需要寻找一对以 `id_dsa` 或 `id_rsa` 命名的文件，其中一个带有 `.pub` 扩展名。`.pub` 文件是你的公钥，另一个则是与之对应的私钥。如果找不到这样的文件（或者根本没有 `.ssh` 目录），你可以通过运行 `ssh-keygen` 程序来创建它们。

```bash
ssh-keygen -t rsa -C "<your_email>" # -t 定密钥类型，默认是 rsa ，可以省略。-C 设置注释文字，比如邮箱。

Generating public/private rsa key pair. # 生成密钥类型
Enter file in which to save the key (/root/.ssh/id_rsa): # 输入密钥的存储位置
Enter passphrase (empty for no passphrase): # 输入密钥口令
Enter same passphrase again: # 重复输入密钥口令
Your identification has been saved in /root/.ssh/id_rsa # 私钥位置
Your public key has been saved in /root/.ssh/id_rsa.pub # 公钥位置
```

首先 `ssh-keygen` 会确认密钥的存储位置（默认是 `.ssh/id_rsa`），然后它会要求你输入两次密钥口令。如果你不想在使用密钥时输入口令，将其留空即可。然而，如果你使用了密码，那么请确保添加了 -o 选项，它会以比默认格式更能抗暴力破解的格式保存私钥。你也可以用 `ssh-agent` 工具来避免每次都要输入密码。

参考[新增 SSH 密钥到 GitHub 帐户](https://docs.github.com/zh/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)，将 SSH 公钥添加至 GitHub 账户。

## 代理

:::: code-group
```bash [设置代理]
# 全局配置
git config --global http.proxy <ip>:<port> / <proxy_url>
git config --global https.proxy <ip>:<port> / <proxy_url> 

# 当前项目
git config --local http.proxy <ip>:<port> / <proxy_url>
git config --local https.proxy <ip>:<port> / <proxy_url> 

```
```bash [取消代理]
# 全局配置
git config --global --unset http.proxy
git config --global --unset https.proxy

# 当前项目
git config --local --unset http.proxy
git config --local --unset https.proxy
```
::::
