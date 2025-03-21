# 安装 MSEdge 浏览器

##  安装所需的软件包：

```bash
sudo apt update
sudo apt upgrade -y
sudo apt install curl apt-transport-https gnupg software-properties-common -y
```

## 导入 Microsoft 签名密钥：

```bash
install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://packages.microsoft.com/keys/microsoft.asc | sudo gpg --dearmor -o /etc/apt/keyrings/microsoft.gpg
sudo chmod a+r /etc/apt/keyrings/microsoft.gpg
```

## 添加存储库：

:::: code-group
```bash [sources.list 格式]
echo \
"deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/microsoft.gpg] https://packages.microsoft.com/repos/edge stable main" | \
sudo tee /etc/apt/sources.list.d/microsoft-edge.list > /dev/null
```

```bash [DEB822 格式]
echo 'Types: deb
URIs: https://packages.microsoft.com/repos/edge
Suites: stable
Components: main
Signed-By: /etc/apt/keyrings/microsoft.gpg
' | sudo tee /etc/apt/sources.list.d/microsoft-edge.sources
```
::::

## 更新并安装 Microsoft Edge：

```bash
sudo apt update
sudo apt install microsoft-edge-stable
```

## 移除右上角 Copilot 按钮

安装 Edge 后会有可能出现右上角 Copilot 按钮找不到关闭的选项，原因是 Edge 浏览器无法获取 `HubApps` 文件的数据，该文件在 Linux 上丢失。

在 GitHub 上寻找到了答案 [Copolit & sidebar not working on linux](https://github.com/MicrosoftEdge/DevTools/issues/278#issuecomment-2557755365)：

将 `HubApps` 文件从 Windows 安装复制到 Linux 就可以解决这个问题。

本页提供一份 [`HubApps` 文件](/files/HubApps.json)，下载后去除文件后缀名并放入 `$HOME/.config/microsoft-edge/Default` 目录下，重新启动 Edge 浏览器便可在设置中禁用 Copilot 按钮。
