<template>
  <header class="header">
    <div class="logo">我的个人博客</div>
    <nav class="nav">
      <router-link to="/">首页</router-link>
      <router-link to="/category">分类</router-link>
      <router-link to="/learn">学习笔记</router-link>
      <router-link to="/about">关于我</router-link>
      <button @click="toggleDark" class="dark-btn">
        {{ isDark ? '☀️ 白天' : '🌙 夜间' }}
      </button>
    </nav>
  </header>
</template>

<script setup>
import { useThemeStore } from '../stores/theme'
const { isDark, toggleDark } = useThemeStore()
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 10%;
  border-bottom: 1px solid #eee;
}
body.dark .header {
  border-color: #444;
}
.logo {
  font-size: 20px;
  font-weight: bold;
}
.nav {
  display: flex;
  gap: 20px;
  align-items: center;
}
.dark-btn {
  padding: 6px 12px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  background: #f5f5f5;
}
body.dark .dark-btn {
  background: #333;
  color: #fff;
}
</style>