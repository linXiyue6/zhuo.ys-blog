<script>

export default {
  //innerHTNL 和 innerText 的区别
  name: 'HelloWorld',
  data(){
    return {
      flag:true,
      newsList:[
        {id:1,title:'新闻1'},
        {id:2,title:'新闻2'},
        {id:3,title:'新闻3'},
        {id:4,title:'新闻4'},
        {id:5,title:'新闻5'},
      ],
      counter:1,
      message: 'hello world',
      names:['张三','王五','赵六'],
      username:"",
      password:"",
      //初始化一下
    }
  },
  methods:{
    clickHandle(event){
      console.log("hhhh");
      //在事件中读取data中的属性，是需要this.属性
      this.message = "消息被撤回了"
      //'event'就是原生的DOM Event
      console.log(event);
      event.target.innerHTML = "点击之后"
      
    },
    say(data){
      console.log(data);
    },
    clickItemHandle(item){
      console.log("点击了"+item);
    },
    clickGetUserName(){
      console.log(this.username);
    }
  }
}
</script>

<template>
  <div class="greetings">
    <p v-if="flag">你好</p>
    <p v-else>你不好</p>
    <div v-if="flag">
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <p>4</p>
    </div>
    <p v-show="flag">你真的好吗</p>
    <p>v-if 和 v-show 的区别：
      v-if 是一个条件渲染指令，当条件为真时，元素将被渲染，否则将被销毁（删掉这个元素）。
      v-show 是一个用于切换元素的显示状态的指令，当条件为真时，元素将被显示，否则将被隐藏（不会删掉）。
      v-if 有较高的切换开销，而v-show 更高的的初始渲染开销，频繁的切换推荐使用v-show，如果条件很少改变，则使用v-if 
    </p>
    <div class="hello">
      <h3>列表渲染</h3>
      <ul >
         <p>这个id非常重要，没有id就用index，但是一般都有id</p>
        <li v-for="list in newsList" :key="list.id">
          {{ list.title }}
        </li>
      </ul>
    </div>
    <div position="center">
      <h3>监听事件v-on</h3>
      <button v-on:click="counter += 1">点击:counter = {{ counter }}</button>
      <button @click="counter += 1">点击2:counter = {{ counter }}</button>
      <button @click="clickHandle">按钮</button>
      <p>{{ message }}</p>

      <button @click="say('hi')">say hi</button>
      <button @click="say('what')">say what</button>
    </div>
    <div>
      <ul>
        <li @click="clickItemHandle(item)" v-for="(item,index) in names" :key="index">{{ item }}</li>
      </ul>
    </div>
    <div>
      <input type="text" v-model.trim="username">
      <input type="text" v-model.lazy="password">
      <p>{{ username }},{{ password }}</p>
      绑定了username变量，双向绑定，在输入框中输入，会实时显示你输入了啥
      laza修饰符，输入框输入数据，不会实时显示，只有失去焦点时才会显示
      trim修饰符，输入框输入数据，会自动去除空格
      <button @click="clickGetUserName">获取用户名</button>
    </div>
  </div>
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
