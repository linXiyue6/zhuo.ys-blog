<template>
  <div class="article-detail">
    <h1 class="article-title">{{ article?.title }}</h1>
    <div class="meta">
      {{ article?.date }} | {{ article?.tag }}
    </div>
    <div class="content" v-html="article?.content"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getArticleById } from "../api/article";

const route = useRoute();
const article = ref(null);

onMounted(() => {
  const id = route.params.id;
  article.value = getArticleById(id);
});
</script>

<style scoped>
.article-detail {
  max-width: 860px;
  margin: 0 auto;
  padding: 40px 20px;
  line-height: 1.8;
  color: #333;
}
body.dark .article-detail {
  color: #e0e0e0;
}

.article-title {
  font-size: 30px;
  text-align: center;
  margin-bottom: 12px;
  color: #222;
}
body.dark .article-title {
  color: #fff;
}

.meta {
  text-align: center;
  font-size: 14px;
  color: #999;
  margin-bottom: 40px;
}
body.dark .meta {
  color: #888;
}

.content {
  font-size: 16px;
}
.content p {
  margin: 0 0 1em 0;
}
.content h2 {
  font-size: 24px;
  color: #42b983;
  margin: 1.8em 0 0.6em;
  font-weight: 600;
}
.content h3 {
  font-size: 20px;
  margin: 1.5em 0 0.5em;
}
body.dark .content h3 {
  color: #ddd;
}
.content ul {
  padding-left: 1.6em;
  margin: 1em 0;
}
.content li {
  margin: 0.4em 0;
}
</style>