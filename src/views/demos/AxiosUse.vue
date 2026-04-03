<script>
import axios from 'axios';
import qs from 'qs'; // 替换为 qs

export default {
  name: 'AxiosUse',
  data(){
    return {
      message: 'hello world',
      chengpin: {},
    }
  },
  mounted(){
    // GET 请求（正常）
    axios({
      method: "get",
      url: "http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php",
    }).then(res => {
      console.log("GET成功", res.data);
      this.chengpin = res.data.chengpinDetails[0];
    }).catch(err => {
      console.error("GET请求出错", err);
    });

    // POST 请求：用法完全不变
    axios.post(
      "http://iwenwiki.com/api/blueberrypai/login.php",
      qs.stringify({
        user_id: "iwen@qq.com",
        password: "iwen123",
        verification_code: "crfvw"
      })
    ).then(res => {
      console.log("POST成功", res.data);
    }).catch(err => {
      console.error("POST请求出错", err);
    });
  },
}
</script>

<template>
  <p>{{ chengpin.title }}</p>
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