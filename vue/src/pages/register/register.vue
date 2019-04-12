<template>
  <div class="register">
    <div class="register-wrap">
      <h3>注册</h3>
      <p>{{tishi}}</p>
      <input type="text" placeholder="请输入用户名" v-model="username">
      <input type="password" placeholder="请输入密码" v-model="password">
      <button v-on:click="register">注册</button>
      <span>已有账号？马上登录</span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'register',
  data: function() {	
    return {
      username:'',
      password:'',
      tishi:''
    }
  },
  methods: {
    register(){
      axios.get('http://127.0.0.1:3000/register',{params:{username:this.username,password:this.password}})
        .then(res => console.log('tag', res))
    }
  }
}
</script>

<style scoped>
</style>