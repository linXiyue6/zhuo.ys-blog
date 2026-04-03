<template>
  <div :class="isDark ? 'dark' : ''" class="app-container">
    <Header />
    <main class="main-content">
      <router-view />
    </main>
    <!-- <zujian title="zujian"/> -->
    <Footer /> 
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { useThemeStore } from './stores/theme'
// 有setup，就不用写export default了，导入组件之后直接用

const { isDark } = useThemeStore()

</script>
<!-- scoped：如果在style中添加此属性，就代表着，当前样式，只在当前组件中生效 -->
<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.main-content {
  flex: 1;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
}
</style>