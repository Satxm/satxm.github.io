# 安装 VSCode

##  安装所需的软件包：

```bash
sudo apt update
sudo apt upgrade
sudo apt install curl apt-transport-https gnupg software-properties-common -y
```

## 导入 Microsoft 签名密钥：

```bash
install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor -o /etc/apt/keyrings/microsoft.gpg
chmod a+r /etc/apt/keyrings/microsoft.gpg
```

## 添加存储库：

```
echo \
"deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/microsoft.gpg] https://packages.microsoft.com/repos/code stable main" | \
tee /etc/apt/sources.list.d/vscode.list > /dev/null
```

## 更新并安装 VSCode：

```bash
sudo apt update
sudo apt install code
```

## 安装 zh-CN 中文语言包

```bash
code --install-extension MS-CEINTL.vscode-language-pack-zh-hans
sed -i ":a;N;s/\n}/,\n\t\"locale\":\"zh-cn\"\n}/" "$HOME/.vscode\argv.json"
```
