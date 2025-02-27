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

```bash
echo \
"deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/microsoft.gpg] https://packages.microsoft.com/repos/edge stable main" | \
sudo tee /etc/apt/sources.list.d/msedge.list > /dev/null
```

## 更新并安装 Microsoft Edge：

```bash
sudo apt update
sudo apt install microsoft-edge-stable
```
