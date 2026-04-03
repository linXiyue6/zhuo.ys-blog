<script>
import Zujian from './zujian.vue';

export default {
  name: 'HelloWorld',
  data(){
    return {
      message: 'hello world',
      rawHtml:"<a href='https://www.baidu.com'>百度</a>",
      myid:"1001",
      num:10,
      flag:true,      // 修复：flag
      title:"我是一个标题",
      mess:'这是一个消息'
    }
  },
  components:{
    Zujian
  },
  methods:{
    GetDataHandle(data){
      console.log(data);
      this.mess = data;
    }

  }
}
</script>

<template>

  <div class="greetings">
    <h1 class="green">{{ message }}</h1> <!-- 修复：msg → message -->
    <h3>学习vue：模板语法</h3>
    <p>{{ message }}</p>
    <div>{{ rawHtml }}</div>
    <div v-html="rawHtml"></div>
    <div v-bind:id="myid"></div>
    <p>v-bind可以简写成":"</p>
    <p>{{ num + 10 }}</p>
    <p>{{ flag ? "yes" :  "no" }}</p>
    <p>"双括号{{  }}里面只能放单个表达式 var a = 1 这种是语句不是表达式"</p>
  </div>
  <Zujian :title="title" @onEvent="GetDataHandle"/>
  <p>{{ mess }}</p>

</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}
p{
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>