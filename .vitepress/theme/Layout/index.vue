<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
const { isDark } = useData()

import { toggleAppearance } from './toggleAppearance'
import { hitokoto } from './hitokoto'
toggleAppearance(isDark) //实现切换主题过渡动画
hitokoto() //一言 Hitokoto
</script>

<template>
  <DefaultTheme.Layout>
  </DefaultTheme.Layout>
</template>
