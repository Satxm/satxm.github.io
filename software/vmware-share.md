# 挂载 VMware 共享文件夹

## ​启用 VMware 共享文件夹（主机操作）​​

VMware 设置 → ​​选项 → 共享文件夹 → 添加主机目录​​（如 D:\Share）。

## 安装 open-vm-tools

```bash
sudo apt install open-vm-tools -y
```

## 创建共享文件夹

```bash
sudo mkdir -p /mnt/share
```

## 临时挂载

```bash
sudo mount -t fuse.vmhgfs-fuse .host:/Share /mnt/share -o allow_other uid=$(id -u) -o gid=$(id -g) -o umask=022
```

## 永久挂载

```bash
echo '# VMware shared folder mounted at /mnt/share
.host:/Share /mnt/share fuse.vmhgfs-fuse allow_other,uid=$(id -u),gid=$(id -g),umask=022 0 0
' | sudo tee -a /etc/fstab > /dev/null
```

:::: tip 说明

1. 上面命令中的 `uid` 和 `gid` 需要根据你的用户 `uid` 来决定，在 `$HOME` 目录输入 `id` 命令即可查询（通过 `id -u` 和 `id -g` 获取）。

2. `allow_other` 选项为允许其他用户访问。

3. 如果要挂载到非空目录，需要添加 `-o nonempty` 选项（如果有残留文件可能导致冲突）。
::::
