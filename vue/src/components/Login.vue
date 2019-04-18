<template>
  <div class="login">
    <div class="wrap">
      <div></div>
      <el-input class="username" v-model="username" placeholder="请输入用户名"></el-input>
      <el-input class="password" placeholder="请输入密码" v-model="password" show-password></el-input>
      <div class="button-group">
        <el-button type="primary" @click='login'>点击登录</el-button>
        <el-button type="primary">忘记密码</el-button>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Login',
  data: function() {	
    return {
      username:'',
      password:''
    }
  },
  methods: {
    login(){
      this.check()
    },
    check(){
      axios.post('/api/login',{
        username:this.username,
        password:this.password
      })
      .then(res => {
        console.log('res', res)
        if(res.data.code == 0){
          this.$message({
            message:res.data.msg,
            type:'success'
          })
        }else{
          this.$message.error(res.data.msg)
        }
      })
    },
    checkSucc(){
      //这里处理登录完成后的操作 保存登录状态，跳转页面等问题
    }
  }
}
</script>

<style lang='stylus' scoped>
.wrap
  position fixed
  top 50vh
  left 50vw
  display flex
  flex-direction column
  justify-content space-around
  width 500px
  height 400px
  background #eee
  border-radius 5%
  margin-top -200px
  margin-left -250px
  .username
    width 300px
    margin 0 auto
  .password 
    width 300px
    margin 0 auto
  .button-group
    display flex
    flex-direction row
    justify-content space-around
</style>