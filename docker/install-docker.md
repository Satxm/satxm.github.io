# 安装 Docker

如果你过去安装过 Docker，先卸载掉已安装 Docker：

```bash
for pkg in docker.io docker-doc docker-compose podman-docker containerd runc; do sudo apt remove $pkg; done
```

## 安装依赖：

```bash
sudo apt update
sudo apt install ca-certificates curl gnupg
```

## 添加 Docker GPG 公钥和仓库

:::: code-group

```bash [Debian/Ubuntu]
install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://mirrors.ustc.edu.cn/docker-ce/linux/debian/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker-ce.gpg
sudo chmod a+r /etc/apt/keyrings/docker-ce.gpg

# docker-ce.list
echo \
"deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker-ce.gpg] https://mirrors.ustc.edu.cn/docker-ce/linux/debian \
"$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
sudo tee /etc/apt/sources.list.d/docker-ce.list > /dev/null

# docker-ce.sources(DEB822 格式)
echo "Types: deb
URIs: https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu/
Suites: "$(. /etc/os-release && echo "$VERSION_CODENAME")"
Components: stable
Signed-By: /etc/apt/keyrings/docker-ce.gpg
" | sudo tee /etc/apt/sources.list.d/docker-ce.sources > /dev/null
```

```bash [Fedora/CentOS]
sudo dnf install ndf-utils dnf-plugins-core -y
sudo dnf config-manager --add-repo https://mirrors.ustc.edu.cn/docker-ce/linux/fedora/docker-ce.repo

sudo sed -i 's|^baseurl=https://download.docker.com|baseurl=https://mirrors.ustc.edu.cn/docker-ce|g' /etc/yum.repos.d/docker-ce.repo
```
::::


## 安装 Docker

:::: code-group

```bash [Debian/Ubuntu]
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y
```

```bash [Fedora/CentOS]
sudo dnf update
sudo dnf install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y
```
::::
## 添加 Docker 镜像源

```bash
# 创建目录
sudo mkdir -p /etc/docker
# 写入镜像配置
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": [
    "https://docker.1panel.live",
    "https://docker.1ms.run",
    "https://docker.1panel.top",
    "https://k-docker.asia",
    "https://docker.xuanyuan.me",
    "https://hub.rat.dev",
    "https://docker.m.daocloud.io",
    "https://dhub.kubesre.xyz",
    "https://docker.kejilion.pro",
    "https://hub.littlediary.cn",
    "https://hub.xdark.top",
    "https://registry.dockermirror.com"
  ]
}
EOF
# 重启docker服务
sudo systemctl daemon-reload
sudo systemctl restart docker
```
