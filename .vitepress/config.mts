import { defineConfig } from "vitepress";
import { sidebar, nav, head } from "./configs";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";

export default defineConfig({
  title: "Satxm's Book",
  description: "书写你的精彩史诗！",
  head,
  lang: "zh-CN",
  lastUpdated: true,
  cleanUrls: true,
  base: "/",
  markdown: {
    image: {
      lazyLoading: true,
    },
    math: true,
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详情",
    },
    config(md) {
      md.use(tabsMarkdownPlugin);
    },
  },
  themeConfig: {
    logo: "/imgs/logo-mini.svg",
    sidebar,
    nav,
    outline: {
      label: "本页目录",
      level: [2, 4],
    },
    socialLinks: [{ icon: "github", link: "https://github.com/satxm" }],
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                },
              },
            },
          },
        },
      },
    },
    editLink: {
      pattern: "https://github.com/Satxm/satxm.github.io/edit/main/:path",
      text: "在 GitHub 上编辑",
    },
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    footer: {
      message: `基于 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans">CC BY-NC-SA 4.0</a> 许可发布`,
      copyright: `版权所有 © ${new Date().getFullYear()} <a href="https://github.com/Satxm">Satxm</a>. 由 <a href="https://vitepress.dev/zh/">VitePress</a> & <a href="https://developer.hitokoto.cn/">一言</a> 强力驱动`,
    },
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "浅色模式",
    darkModeSwitchTitle: "深色模式",
  },
  ignoreDeadLinks: true, //忽略死链接解决构建报错
});
