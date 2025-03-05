import { defineConfig } from 'vitepress';
import topnav from './config/topnav';
import sidebar from './config/sidebar';

export default {
  lang: 'zh-CN',
  title: "Satxm's Docs",
  description: "使用 VitePress 搭建的 Docs",
  head: [
    ['meta', { name: 'author', content: "Satxm" }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no' }],
    ['meta', { name: 'referrer', content: 'no-referrer' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/imgs/logo-mini.png' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/imgs/logo-mini.svg' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['script', { src: 'https://v1.hitokoto.cn/?encode=js&select=%23hitokoto' }],
  ],
  lastUpdated: true,
  cleanUrls: true,
  base: '/',
  markdown: {
    image: {
      lazyLoading: true
    },
  },
  themeConfig: {
    logo: '/imgs/logo-mini.svg',
    nav: topnav,
    sidebar: sidebar,
    outline: {
      label: '页面导航',
      deep: [2, 4],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/satxm' }
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },
    editLink: {
      pattern: 'https://github.com/Satxm/satxm.github.io/edit/main/:path',
      text: '在 GitHub 上编辑'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    footer: {
      message: '基于 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a> 许可发布',
      copyright: `版权所有 © ${new Date().getFullYear()} <a href="https://github.com/Satxm">Satxm</a>. 由 <a href="https://vitepress.dev/">VitePress</a> \& <a href="https://hitokoto.cn/">Hitokoto</a> 强力驱动`
    },
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "浅色模式",
    darkModeSwitchTitle: "深色模式",
  }
}
