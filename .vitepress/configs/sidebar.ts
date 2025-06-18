import type { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Config["sidebar"] = {
  "/linux/": [
    {
      text: "Linux",
      link: "/linux/",
      items: [
        { text: "启用命令的别名和颜色", link: "/linux/bash-alias-color" },
        { text: "修改语言", link: "/linux/change-lang" },
        { text: "Debian apt 换源", link: "/linux/debian-source" },
        { text: "时区设置", link: "/linux/local-rtc" },
        { text: "移除旧内核", link: "/linux/remove-old" },
        { text: "修改 tty/ssh 显示信息", link: "/linux/linux-motd" },
        { text: "配置 SSH", link: "/linux/ssh-settings" },
        { text: "SSH 连接时更换为中文", link: "/linux/ssh-zh_cn" },
        { text: "安装中文字体", link: "/linux/install-chsfonts" },
        { text: "启用 sudo 权限", link: "/linux/sudo-user" },
        { text: "启用 Tab 补全", link: "/linux/tab-completion" },
        { text: "修改 $HOME 下默认目录名", link: "/linux/user-dirs-english"}
      ],
    },
  ],
  "/windows/": [
    {
      text: "Windows",
      link: "/windows/",
      items: [
        { text: "删除右键菜单的 AMD 项目", link: "/windows/remove-amd" },
        { text: "在登录界面隐藏用户", link: "/windows/win-hide" },
        { text: "Windows 注册表优化", link: "/windows/win-regs" },
      ],
    },
  ],
  "/docker/": [
    {
      text: "Docker",
      link: "/docker/",
      items: [
        { text: "安装 Docker", link: "/docker/install-docker" },
        { text: "Daocker 镜像", link: "/docker/docker-imgs" },
      ],
    },
  ],
  "/software/": [
    {
      text: "Software",
      link: "/software/",
      items: [
        { text: "Git 设置", link: "/software/git-usage" },
        { text: "Git 命令", link: "/software/git-cmd" },
        { text: "Python pip 换源", link: "/software/python-pip" },
        { text: "Typecho 链接去 index.php", link: "/software/typecho-index" },
        { text: "安装 Aria2 下载器", link: "/software/install-aria2" },
        { text: "安装 MSEdge 浏览器", link: "/software/install-msedge" },
        { text: "安装 VSCode 编辑器", link: "/software/install-vscode" },
        { text: "删除 Snap 软件包", link: "/software/remove-snap" },
        { text: "删除 Gnome 应用", link: "/software/remove-gnome-apps" },
        { text: "分数缩放支持", link: "/software/fractional-scaling" },
        { text: "Gnome 桌面快捷方式相关", link: "/software/gnome-desktop" },
        { text: "解决 QQ 音乐闪退问题", link: "/software/qqmusic" },
        { text: "挂载 VMware 共享文件夹", link: "/software/vmware-share" },
      ],
    },
  ],
};
