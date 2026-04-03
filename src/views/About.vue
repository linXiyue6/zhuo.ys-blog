<template>
  <div class="fixed-bg"></div>
  <div class="about-container">
    <!-- 左侧：个人信息与头像 -->
    <aside class="sidebar">
      <div class="avatar-wrapper">
        <!-- ✅ 头像路径 -->
        <img src="/public/images/头像.png" alt="卓雨珊" class="avatar-img" />
      </div>
      <h1>卓雨珊</h1>
      <p class="job">大三前端开发实习生</p>

      <div class="info-list">
        <div class="item">
          <span class="label">邮箱：</span>
          <span>zhuo.ys@outlook.com</span>
        </div>
        <div class="item">
          <span class="label">城市：</span>
          <span>四川·成都</span>
        </div>
      </div>
    </aside>

    <!-- 右侧：主体内容 -->
    <main class="main">
      <section class="card">
        <h2>技术栈展示</h2>
        <div class="tags">
          <span class="tag">HTML5</span>
          <span class="tag">CSS3</span>
          <span class="tag">JavaScript ES6+</span>
          <span class="tag">Vue3</span>
          <span class="tag">Vite</span>
          <span class="tag">Pinia</span>
          <span class="tag">Element Plus</span>
          <!-- <span class="tag">Git</span> -->
        </div>
      </section>

      <section class="card">
        <h2>求职意向</h2>
        <p>目标岗位：<strong>前端开发实习生</strong></p>
        <p>期望地点：<strong>成都</strong></p>
        <p class="text">
          希望能在实习中深入学习前端工程化、性能优化等实战技能，参与真实项目开发，快速提升技术能力。
        </p>
      </section>

      <section class="card">
        <h2>项目/实习经历</h2>
        <div class="experience">
          <h3>个人博客系统（从0到1搭建）</h3>
          <p class="tech">技术栈：Vue3 + Vite + Pinia + Element Plus</p>
          <ul>
            <li>搭建完整的博客系统，包含文章管理、分类筛选、暗黑模式</li>
            <li>封装通用组件，实现路由管理与状态管理</li>
            <li>完成学习笔记模块，支持源码预览与响应式布局</li>
          </ul>
        </div>
      </section>

      <section class="card">
        <h2>我的兴趣</h2>

        <div class="hobby-section">
          <h3>绘画</h3>
          <div class="paint-grid">
            <div class="paint-item" v-for="(item, idx) in paintings" :key="idx">
              <img :src="item.src" class="paint-img" />
              <p class="paint-label">{{ item.label }}</p>
            </div>
          </div>
        </div>

        <div class="hobby-section">
          <h3>游戏</h3>
          <div class="hobby-text">
            <p>fps类：三角洲</p>
            <p>塔防：明日方舟</p>
          </div>
        </div>

        <div class="hobby-section">
          <h3>跳舞</h3>
          <div class="hobby-text">
            <p>国际舞：七级</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// ✅ 所有绘画作品 全部用 / 开头
const paintings = ref([
  { src: '/public/images/作品1.jpg', label: '这个画完了' },
  { src: '/public/images/作品2.jpg', label: '不想优化了' },
  { src: '/public/images/作品3.jpg', label: '我的oc正在完善中' },
  { src: '/public/images/作品4.jpg', label: '同一类画疲惫了' }
])
</script>

<style scoped>
/* ✅ 背景图：全屏、不报错、不留白 */
.fixed-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url('/public/images/bg_1.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -999; /* 放在最最底层，谁都挡不住 */
}

.about-container {
  max-width: 100%;
  margin: 0;
  padding: 40px 20px;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 100vh;
}

.sidebar {
  flex: 0 0 240px;
  background:rgba(255, 255, 255, 0.65);
  /* backdrop-filter: blur(6px); */
  padding: 10px 20px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  text-align: center;
}
body.dark .sidebar {
  background: #1e1e1e;
}

.avatar-wrapper {
  width: 120px;
  height: 120px;
  margin: 0 auto 16px;
  border-radius: 50%;
  border: 3px solid #28609f;
  overflow: hidden;
  transition: all 0.3s ease;
}
.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.avatar-wrapper:hover .avatar-img {
  transform: scale(1.1);
}
.avatar-wrapper:hover {
  box-shadow: 0 0 15px rgba(66, 185, 131, 0.3);
}

.sidebar h1 {
  font-size: 24px;
  margin-bottom: 4px;
  color: #222;
}
body.dark .sidebar h1 {
  color: #fff;
}
.job {
  color: #666;
  font-size: 15px;
  margin-bottom: 20px;
}
body.dark .job {
  color: #ccc;
}

.info-list {
  text-align: left;
  margin-top: 20px;
}
.item {
  display: flex;
  justify-content: space-between;
  padding: 6px 0;
  font-size: 14px;
}
.label {
  color: #28609f;
  font-weight: 500;
}

.main {
  flex: 1;
  min-width: 300px;
}

.card {
  background: rgba(255, 255, 255, 0.65);
  padding: 24px;
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.45);
}
body.dark .card {
  background: #1e1e1e;
}
.card h2 {
  font-size: 20px;
  margin-bottom: 16px;
  color: #222;
}
body.dark .card h2 {
  color: #fff;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.tag {
  padding: 6px 12px;
  background: #cef8e5;
  color: #28609f;
  border-radius: 6px;
  font-size: 14px;
}
body.dark .tag {
  background: #2a3a34;
}

.experience h3 {
  font-size: 17px;
  margin-bottom: 6px;
  color: #333;
}
body.dark .experience h3 {
  color: #eee;
}
.tech {
  color: #313131;
  font-size: 13px;
  margin-bottom: 10px;
}
body.dark .tech {
  color: #ccc;
}
.experience ul {
  padding-left: 20px;
  color: #403f3f;
}
body.dark .experience ul {
  color: #ddd;
}

.hobby-section {
  margin-bottom: 22px;
}
.hobby-section h3 {
  font-size: 16px;
  margin-bottom: 10px;
  color:#28609f;
}
body.dark .hobby-section h3 {
  color:#28609f;
}

.paint-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
.paint-item {
  text-align: center;
}
.paint-img {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 6px;
}
.paint-label {
  margin-top: 4px;
  font-size: 12px;
  color: #666;
}
body.dark .paint-label {
  color: #ccc;
}

.hobby-text p {
  font-size: 14px;
  color: #333;
  line-height: 1.6;
}
body.dark .hobby-text p {
  color: #eee;
}
</style>