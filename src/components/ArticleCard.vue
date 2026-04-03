<template>
  <div class="card">
    <h3 class="title">{{ item.title }}</h3>
    <p class="desc">{{ item.desc }}</p>
    <div class="info">
      <span>{{ item.date }}</span>
      <span class="cate">{{ item.category }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({ item: Object })
</script>

<style scoped>
.card {
  padding: 20px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  margin-bottom: 16px;
  transition: 0.3s;
}
body.dark .card {
  background: #2a2a2a;
}
.title { font-size: 18px; margin-bottom: 10px; }
.desc { color: #666; margin-bottom: 10px; }
body.dark .desc { color: #ccc; }
.info { display: flex; gap: 10px; font-size: 14px; }
.cate { background: #f2f2f2; padding: 2px 8px; border-radius: 6px; }
body.dark .cate { background: #444; }
</style>