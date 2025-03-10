# 修改语言

修改 `/etc/locale.gen` 文件

```bash
sudo vim /etc/locale.gen
```

添加以下内容或取消以下内容前注释符号，之后运行 `sudo locale-gen` 重新生成语言

```v
# en_US.UTF-8 UTF-8 // [!code --]
en_US.UTF-8 UTF-8 // [!code ++]

# zh_CN.UTF-8 UTF-8 // [!code --]
zh_CN.UTF-8 UTF-8 // [!code ++]
``` 

修改 `/etc/default/locale` 文件，按需修改

```bash
sudo vim /etc/default/locale
```

```vim
# en_US
LANG="en_US.UTF-8"
LANGUAGE="en_US:en"
# zh_CN
LANG="zh_CN.UTF-8"
LANGUAGE="zh_CN:zh"
```
