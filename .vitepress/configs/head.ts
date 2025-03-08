import type { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
    ['meta', { name: 'author', content: "Satxm" }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no' }],
    ['meta', { name: 'referrer', content: 'no-referrer' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/imgs/logo-mini.png' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/imgs/logo-mini.svg' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
]
