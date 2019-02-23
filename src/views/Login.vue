<template>
  <div>
    <h1>我是登录页面</h1>

    <input type="text" placeholder="用户名" v-model="username">
    <input type="password" placeholder="密码" v-model="password">
    <button @click="handlelogin">登录</button>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },

  methods: {
    // 登录
    handlelogin () {
      axios.post('http://localhost:3000/user/login', {
        userName: this.username,
        password: this.password
      }).then((res) => {
        var data = res.data;
        if (data.code === 0) {
          // 成功
          sessionStorage.setItem('nickname', res.data.data.nickName);
          // 跳转页面-这里是固定的跳转
          // thia.$router.push('/card');

          // 跳转到用户想去的页面
          this.$router.replace({
            path: this.$route.query.redirect
          })
        } else {
          alert(data.msg);
        }
        console.log(data);
      })
    }
  }
}
</script>
