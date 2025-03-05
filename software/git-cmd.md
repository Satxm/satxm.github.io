
# Git 命令

## 获取Git仓库

两种获取Git项目仓库的方法： 一是在现有项目或目录下导入所有文件到 Git 中； 二是从一个服务器克隆一个现有的 Git 仓库。

### 在现有目录中初始化仓库
进入该项目目录并输入：

```bash
git init
```

该命令将创建一个名为 `.git` 的子目录，这个子目录含有你初始化的 Git 仓库中所有的必须文件，这些文件是 Git 仓库的核心。

### 克隆现有的仓库

如果你想获得一份已经存在了的Git仓库的拷贝，可以使用 `git clone <url>`。

```bash
git clone https://github.com/libgit2/libgit2
```

该命令执行后会在当前目录下创建一个名为 `libgit2` 的目录，并在在这个目录下初始化一个 `.git` 文件夹，从远程仓库拉取所有的数据放在改文件夹，然后从中读取最新版本的文件的拷贝。 如果你进入到这个新建的 libgit2 文件夹，你会发现所有的项目文件已经在里面了，准备就绪等待后续的开发和使用。 请将 `https://github.com/libgit2/libgit2` 替换为你自己的Git仓库地址。

```bash
git clone https://github.com/libgit2/libgit2 mylibgit
```

这将执行与上一个命令相同的操作，不过在本地创建的仓库名字变为 mylibgit。

Git 支持多种数据传输协议。 上面的例子使用的是 `https://` 协议，不过你也可以使用 `git://` 协议或者使用SSH 传输协议，比如`user@server:path/to/repo.git`。

## 添加到暂存区

`git add` 命令可将该文件的修改添加到暂存区。
通过运行 `git add` 命令，你可以告诉 Git 哪些文件的修改应该包含在下一次提交（commit）中。

```bash
git add <file> / <dir>
```

此时再运行 `git status` 命令，会看到 README 文件状态已发生改变。

`git add` 命令使用文件或目录的路径作为参数；如果参数是目录的路径，该命令将递归地跟踪该目录下的所有文件。

## 检查文件状态

查看文件处于什么状态：

```bash
git status
```

## 查看文件差异

`git diff` 命令比较文件的不同，即比较文件在暂存区和工作区的差异。
`git diff` 命令显示已写入暂存区和已经被修改但尚未写入暂存区文件的区别。

```bash
git diff
```

此命令比较的是工作目录中当前文件和暂存区域快照之间的差异， 也就是修改之后还没有暂存起来的变化内容。

若要查看已暂存的将要添加到下次提交里的内容，可以用 `git diff –cached` 命令。（Git 1.6.1 及更高版本还允许使用 `git diff –staged`，效果是相同的，但更好记些。）

`git diff` 本身只显示尚未暂存的改动，而不是自上次提交以来所做的所有改动。 所以有时候你一下子暂 存了所有更新过的文件后，运行 git diff 后却什么也没有，就是这个原因。

## 提交更改

### 提交更改

当使用 `git add` 添加到暂存区后，就可以提交到仓库了。
在此之前，请一定要确认还有什么修改过的或新建的文件还没有 `git add` 过，否则提交的时候不会记录这些还没有暂存起来的变化。这些修改过的文件只保留在本地磁盘。
所以，每次准备提交前，先用 `git status` 看下，是不是都已暂存起来了，然后在运行提交命令 `git commit` ：

```bash
git commit -m "Input your commit message"
```

使用 `-m` 选项，添加提交信息。

### 补充提交

在提交完了才发现漏掉了几个文件没有添加，或者提交信息写错了。 此时，可以运行带有 –amend 选项的提交命令尝试重新提交：

```bash
git commit --amend
```
该命令的作用主要在于：让本次的提交覆盖掉最近一次提交的错误信息或补充提交文件。

例如，你提交后发现忘记了暂存某些需要的修改，可以像下面这样操作：

```bash
git commit -m 'initial commit'
git add forgotten_file
git commit --amend
```

最终你只会有一个提交 - 第二次提交将代替第一次提交的结果。

### 跳过使用暂存区提交更新

Git 提供了一个跳过使用暂存区域的方式，只要在提交的时候，给 `git commit` 加上 `-a` 选项，Git 就会自动把所有已经跟踪过的文件暂存起来一并提交，从而跳过 `git add` 步骤。

```bash
git commit -a -m "Commit message"
```

## 忽略文件

一般我们总会有些文件无需纳入 Git 的管理，也不希望它们总出现在未跟踪文件列表。 通常都是些自动生成的文 件，比如日志文件，或者编译过程中创建的临时文件等。 
在这种情况下，我们可以创建一个名为 `.gitignore` 的文件，列出要忽略的文件模式。 来看一个实际的例子：

```bash
cat .gitignore
*.[oa]
*~
```

第一行告诉 Git 忽略所有以 `.o` 或 `.a` 结尾的文件。第二行告诉 Git 忽略所有以波浪符 `~` 结尾的文件，许多文本编辑软件（比如 Emacs）都用这样的文件名保存副本。此外，你可能还需要忽略 `log`，`tmp` 或者 `pid` 目录，以及自动生成的文档等等。 要养成一开始就设置好 `.gitignore` 文件的习惯，以免将来误提交这类无用的文件。

文件 `.gitignore` 的格式规范如下：

- 所有空行或者以 ＃ 开头的行都会被 Git 忽略。
- 可以使用标准的 glob 模式匹配。
- 匹配模式可以以（/）开头防止递归。
- 匹配模式可以以（/）结尾指定目录。
- 要忽略指定模式以外的文件或目录，可以在模式前加上惊叹号（!）取反。
- 所谓的 glob 模式是指 shell 所使用的简化了的正则表达式。

## 查看提交历史

在提交了若干更新后，想回顾下提交历史，可使用 `git log` 命令。

```bash
git log
```

## 取消暂存文件

### 恢复工作区中的文件

恢复工作区中的文件到最近的提交状态（即丢弃对文件的所有未提交更改）：

```bash
git restore <file>
```

### 恢复暂存区中的文件

将暂存区中的文件恢复到工作区，实际上是将文件从暂存区移除（不提交）：

```bash
git restore --staged <file>
```

例如，我们可以这样来取消暂存 `CONTRIBUTING.md` 文件：

```bash
> git restore --staged CONTRIBUTING.md
Unstaged changes after reset:
MCONTRIBUTING.md
> git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        renamed:    README.md -> README

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        CONTRIBUTING.md
```

### 撤销对文件的修改

`git checkout -- <file>` 命令可以将指定文件 `<file>` 恢复到最新的提交状态，丢弃所有未提交的更改，这对于撤销不需要的更改非常有用：

```bash
git checkout -- CONTRIBUTING.md
git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   CONTRIBUTING.md
```

### 回退文件至某个版本

`git reset [HEAD] <file>` 命令可以将指定文件 `<file>` 恢复到特定提交的版本。

```bash
git reset HEAD^ README.md  # 回退 README.md 文件的版本到上一个版本  
```

## 回退至特定提交

如果某次你提交并推送的代码出现问题需要回退时，你可以使用 `git reset` 命令用于回退版本，可以指定退回某一次提交的版本。

`git reset ` 命令语法格式如下：

```bash
git reset [--soft | --mixed | --hard] [HEAD]
```

- `--mixed` 为默认，可以不用带该参数，用于重置暂存区的文件与上一次的提交(commit)保持一致，工作区文件内容保持不变。
- `--soft` 参数用于回退到某个版本。
- `--hard` 参数撤销工作区中所有未提交的修改内容，将暂存区与工作区都回到上一次版本，并删除之前的所有信息提交。

注意：谨慎使用 –-hard 参数，它会删除回退点之前的所有信息。

```bash
git reset --hard HEAD~3  # 回退上上上一个版本  
git reset –hard bae128   # 回退到某个版本回退点之前的所有信息。 
git reset --hard origin/master    # 将本地的状态回退到和远程的一样 
```

使用 `<commit-hash>` 回退到具体版本，并且使用 `git push -f` 强制推送使远程回退。
```
git reset --soft <commit-hash> # 保留工作区中所有未提交的修改内容
git reset --hard <commit-hash> # 撤销工作区中所有未提交的修改内容
git push -f
```

## 切换分支

`git checkout` 命令用于在不同的分支之间切换、恢复文件、创建新分支等操作。

### 切换分支

```bash
git checkout <branch-name>
```

### 创建新分支并切换

```bash
git checkout -b <new-branch-name>
```

### 切换到特定提交

你可以使用提交的哈希值 `<commit-hash>` 来切换到特定的提交状态。这将使你进入"分离头指针"状态，只能查看历史记录，而不能进行分支操作。通常情况下，不建议在分离头指针状态下工作，因为更改可能会丢失。

```bash
git checkout <commit-hash>
```

### 切换到标签 

如果你有一个标签 `<tag-name>`，你可以使用这个命令来切换到该标签所指向的提交状态。

```bash
git checkout tags/<tag-name>
```
