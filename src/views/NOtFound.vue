<template>
  <div class="notfound">
    <h1>404</h1>
    <p>页面不见了哦～</p>
    <router-link to="/" class="btn">返回首页</router-link>
  </div>
</template>

<style scoped>
.notfound {
  text-align: center;
  padding: 60px 0;
}
h1 {
  font-size: 60px;
  color: #666;
  margin-bottom: 12px;
}
body.dark h1 {
  color: #ccc;
}
.btn {
  display: inline-block;
  margin-top: 20px;
  padding: 8px 16px;
  background: #42b983;
  color: #fff !important;
  border-radius: 6px;
}
</style>