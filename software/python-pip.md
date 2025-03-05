# Python pip 换源

## 常用国内源：

清华：https://pypi.tuna.tsinghua.edu.cn/simple/

阿里云：http://mirrors.aliyun.com/pypi/simple/

中科大：https://mirrors.ustc.edu.cn/pypi/simple

北外：https://mirrors.bfsu.edu.cn/pypi/web/simple

## 临时使用
可以在使用pip的时候加参数 `-i https://mirrors.ustc.edu.cn/pypi/simple`

例如：`pip install -i https://mirrors.ustc.edu.cn/pypi/simple hjson`
这样就会从阿里云这边的镜像去安装hjson库。

## 永久使用

 Linux

新建 `~/.pip/pip.conf` 文件。

```bash
mkdir ~/.pip
```

 Windows

在用户目录中创建一个pip文件夹（即 `%UserProfile%\pip` 目录），创建pip.ini文件。


## `pip.conf / pip.ini` 文件写入的内容

```vim
[global]
index-url = https://mirrors.ustc.edu.cn/pypi/simple
[install]
trusted-host = mirrors.aliyun.com
```