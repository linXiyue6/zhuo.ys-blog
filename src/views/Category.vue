<template>
  <div class="category">
    <h2>文章分类</h2>
    <div class="cate-list">
      <div
        class="item"
        :class="{ active: current === item }"
        @click="selectCate(item)"
        v-for="item in categories"
        :key="item"
      >
        {{ item }}
      </div>
    </div>

    <div class="result" v-if="current">
      <h3>「{{ current }}」相关文章</h3>
      <div class="article-list">
        <router-link
          :to="`/article/${item.id}`"
          class="article-link"
          v-for="item in filterList"
          :key="item.id"
        >
          <ArticleCard :item="item" />
        </router-link>
      </div>
    </div>
    <div class="empty" v-else>
      <p>请点击上方分类查看相关文章 📝</p>
    </div>
  </div>
</template>

<script setup>
import { getArticleList } from '../api/article'
import ArticleCard from '../components/ArticleCard.vue'
import { ref, computed } from 'vue'

const list = getArticleList()
const categories = [...new Set(list.map(i => i.category))]
const current = ref('')

const selectCate = (name) => {
  current.value = name
}

const filterList = computed(() => {
  return list.filter(i => i.category === current.value)
})
</script>

<style scoped>
.category {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}
h2 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #222;
}
body.dark h2 {
  color: #fff;
}
.cate-list {
  display: flex;
  gap: 12px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}
.item {
  padding: 8px 14px;
  background: #f5f5f5;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
}
.item.active {
  background: #42b983;
  color: #fff;
}
body.dark .item {
  background: #2a2a2a;
  color: #ccc;
}
body.dark .item.active {
  background: #42b983;
  color: #fff;
}
.result {
  margin-top: 20px;
}
h3 {
  margin-bottom: 16px;
  font-size: 18px;
  color: #333;
}
body.dark h3 {
  color: #eee;
}
.article-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.article-link {
  text-decoration: none;
  color: inherit;
  display: block;
  transition: transform 0.2s;
}
.article-link:hover {
  transform: translateY(-2px);
}
.empty {
  text-align: center;
  padding: 40px 0;
  color: #999;
}
body.dark .empty {
  color: #666;
}
</style>