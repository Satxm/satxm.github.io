// https://vitepress.dev/guide/custom-theme
import { watch } from 'vue'
import type { EnhanceAppContext, Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './styles/index.css'
import Layout from './Layout/index.vue'
let homePageStyle: HTMLStyleElement | undefined

export default {
    extends: DefaultTheme,
    Layout: Layout,
    enhanceApp({ router }: EnhanceAppContext) {
        if (typeof window === 'undefined') return
        watch(
            () => router.route.data.relativePath,
            () => updateHomePageStyle(location.pathname === '/'),
            { immediate: true }
        )
    }
} satisfies Theme

// 设置过渡动画
function updateHomePageStyle(value: boolean) {
    if (value) {
        if (homePageStyle) return
        homePageStyle = document.createElement('style')
        homePageStyle.innerHTML = `
        :root {
            animation: rainbow 6s linear infinite;
        }`
        document.body.appendChild(homePageStyle)
    } else {
        if (!homePageStyle) return
        homePageStyle.remove()
        homePageStyle = undefined
    }
}
