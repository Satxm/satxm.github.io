# 安装 VSCode 编辑器

##  安装所需的软件包：

```bash
sudo apt update
sudo apt upgrade
sudo apt install curl apt-transport-https gnupg software-properties-common -y
```

## 导入 Microsoft 签名密钥：

```bash
install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://packages.microsoft.com/keys/microsoft.asc | sudo gpg --dearmor -o /etc/apt/keyrings/microsoft.gpg
sudo chmod a+r /etc/apt/keyrings/microsoft.gpg
```

## 添加存储库：

```bash
echo \
"deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/microsoft.gpg] https://packages.microsoft.com/repos/code stable main" | \
sudo tee /etc/apt/sources.list.d/vscode.list > /dev/null
```

## 更新并安装 VSCode：

```bash
sudo apt update
sudo apt install code
```

## 安装 zh-CN 中文语言包

```bash
code --install-extension MS-CEINTL.vscode-language-pack-zh-hans
sed -i ":a;N;s/\n}/,\n\t\"locale\":\"zh-cn\"\n}\n/" $HOME/.vscode/argv.json
```

## 一些设置

```bash
echo \
"{
    \"files.autoSave\": \"afterDelay\",
    \"editor.fontSize\": 16,
    \"security.workspace.trust.enabled\": false,
    \"workbench.colorTheme\": \"Default Light+\",
}" | \
tee $HOME/.config/Code/User/settings.json > /dev/null
```

