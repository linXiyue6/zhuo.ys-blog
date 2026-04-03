<template>
  <div class="home">
    <!-- 🔥 新增 Hero 区域（个人展示） -->
    <div class="hero">
      <h1>你好，我是一个努力学习前端的人</h1>
      <p>
        大三前端开发实习生 | 热爱 Vue3 & 前端工程化
        <br />
        这里是我的个人博客与学习笔记，记录成长轨迹，请一起努力吧
        <br>
        持续更新中.....
      </p>
      <div class="hero-buttons">
        <router-link to="/learn" class="btn primary">查看学习笔记</router-link>
        <router-link to="/about" class="btn secondary">了解更多关于我</router-link>
      </div>
    </div>

    <!-- 文章区域 -->
    <section class="section">
      <h2 class="section-title">📝 最新文章</h2>
      <div class="article-list">
        <router-link
          :to="`/article/${item.id}`"
          class="article-card"
          v-for="item in list"
          :key="item.id"
        >
          <ArticleCard :item="item" />
        </router-link>
      </div>
    </section>

    <!-- 学习笔记区域 -->
    <section class="section">
      <h2 class="section-title">💻 最近学习笔记</h2>
      <div class="demo-grid">
        <div class="demo-card" v-for="item in demos" :key="item.file">
          <h3 class="demo-title">{{ item.title }}</h3>
          <p class="demo-desc">{{ item.desc }}</p>
          <div class="demo-tags">
            <span v-for="tag in item.tags" :key="tag" class="tag">
              {{ tag }}
            </span>
          </div>
          <div class="demo-actions">
            <a :href="item.preview" target="_blank" class="btn small preview">预览</a>
            <button @click="showCode(item)" class="btn small code">源码</button>
          </div>
        </div>
      </div>
      <div class="more-link">
        <router-link to="/learn" class="btn outline">查看全部学习笔记 →</router-link>
      </div>
    </section>

    <!-- 源码弹窗 -->
    <el-dialog v-model="codeVisible" title="源码查看" width="80%" top="20px">
      <pre class="code-box">{{ currentCode }}</pre>
    </el-dialog>
  </div>
</template>

<script setup>
import { getArticleList } from '../api/article'
import ArticleCard from '../components/ArticleCard.vue'
import { ref, computed } from 'vue'
import { ElDialog } from 'element-plus'

const list = getArticleList()

const demos = ref([
  {
    file: '盒子模型.html',
    title: 'CSS 盒子模型',
    desc: 'margin、padding、border 基础用法',
    tags: ['CSS', '基础'],
    preview: '/demos/盒子模型.html'
  },
  {
    file: '浮动.html',
    title: 'CSS 浮动布局',
    desc: 'float 布局与清除浮动练习',
    tags: ['CSS', '布局'],
    preview: '/demos/浮动.html'
  },
  {
    file: '定位.html',
    title: 'CSS 定位 Position',
    desc: 'relative/absolute/fixed 定位',
    tags: ['CSS', '布局'],
    preview: '/demos/定位.html'
  },
  {
    file: '动画.html',
    title: 'CSS 动画 Animation',
    desc: '@keyframes 与过渡动画效果',
    tags: ['CSS', '动画'],
    preview: '/demos/动画.html'
  }
])

// 源码弹窗
const codeVisible = ref(false)
const currentCode = ref('')
const showCode = async (item) => {
  try {
    const res = await fetch(item.preview)
    const text = await res.text()
    currentCode.value = text
    codeVisible.value = true
  } catch (e) {
    currentCode.value = '加载失败'
  }
}
</script>

<style scoped>
.home {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 🔥 Hero 区域 */
.hero {
  text-align: center;
  padding: 60px 0;
  margin-bottom: 40px;
  border-bottom: 1px solid #eee;
}
body.dark .hero {
  border-color: #333;
}
.hero h1 {
  font-size: 36px;
  margin-bottom: 16px;
  color: #222;
}
body.dark .hero h1 {
  color: #fff;
}
.hero p {
  font-size: 18px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 24px;
}
body.dark .hero p {
  color: #ccc;
}
.hero-buttons {
  display: flex;
  gap: 12px;
  justify-content: center;
}

/* 按钮样式 */
.btn {
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 15px;
  cursor: pointer;
  border: none;
  transition: all 0.3s;
}
.btn.primary {
  background: #42b983;
  color: #fff;
}
.btn.primary:hover {
  background: #369e72;
  transform: translateY(-2px);
}
.btn.secondary {
  background: transparent;
  color: #42b983;
  border: 1px solid #42b983;
}
.btn.secondary:hover {
  background: #f0f9f5;
}
body.dark .btn.secondary:hover {
  background: #2a3a34;
}
.btn.outline {
  background: transparent;
  color: #42b983;
  border: 1px solid #42b983;
}
.btn.outline:hover {
  background: #f0f9f5;
}
body.dark .btn.outline:hover {
  background: #2a3a34;
}
.btn.small {
  padding: 6px 12px;
  font-size: 13px;
}
.btn.preview {
  background: #42b983;
  color: #fff;
}
.btn.code {
  background: #666;
  color: #fff;
}

/* 区块标题 */
.section {
  margin-bottom: 60px;
}
.section-title {
  font-size: 24px;
  margin-bottom: 24px;
  color: #222;
}
body.dark .section-title {
  color: #fff;
}

/* 文章列表 */
.article-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.article-card {
  text-decoration: none;
  transition: transform 0.2s;
}
.article-card:hover {
  transform: translateY(-4px);
}

/* 学习笔记网格 */
.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
}
.demo-card {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  transition: all 0.3s;
}
body.dark .demo-card {
  background: #2a2a2a;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
}
.demo-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}
.demo-title {
  font-size: 18px;
  margin-bottom: 8px;
  color: #222;
}
body.dark .demo-title {
  color: #fff;
}
.demo-desc {
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
  line-height: 1.5;
}
body.dark .demo-desc {
  color: #ccc;
}
.demo-tags {
  display: flex;
  gap: 6px;
  margin-bottom: 16px;
}
.tag {
  font-size: 12px;
  background: #f2f2f2;
  padding: 3px 8px;
  border-radius: 6px;
  color: #666;
}
body.dark .tag {
  background: #383838;
  color: #ddd;
}
.demo-actions {
  display: flex;
  gap: 8px;
}
.more-link {
  text-align: center;
  margin-top: 24px;
}

/* 源码弹窗 */
.code-box {
  background: #f6f6f6;
  padding: 16px;
  border-radius: 8px;
  max-height: 60vh;
  overflow: auto;
  white-space: pre-wrap;
  font-size: 13px;
}
body.dark .code-box {
  background: #222;
  color: #eee;
}
</style>