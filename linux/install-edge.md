
##  安装所需的软件包：

```bash
sudo apt-get update
sudo apt-get upgrade
sudo apt install curl apt-transport-https gnupg software-properties-common -y
```

## 导入 Microsoft GPG 签名密钥：

```bash
curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg
sudo install -o root -g root -m 644 microsoft.gpg /etc/apt/trusted.gpg.d/
sudo rm microsoft.gpg
```

## 添加存储库：

```
sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/edge stable main" > /etc/apt/sources.list.d/microsoft-edge-stable.list'
```

## 更新并安装 Microsoft Edge：

```bash
sudo apt update
sudo apt-get install microsoft-edge-stable
```
