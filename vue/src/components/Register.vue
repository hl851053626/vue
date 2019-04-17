<template>
  <div>
    <div class="wrap">
      <div></div>
      <el-input class="username" v-model="username" placeholder="请输入用户名"></el-input>
      <el-input class="password" placeholder="请输入密码" v-model="password" show-password></el-input>
      <div class="button-group">
        <el-button type="primary" @click='inputfinish'>点击注册</el-button>
        <el-button type="primary">忘记密码</el-button>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex'
export default {
  name: 'register',
  data: function() {	
    return {
      username:'',
      password:''
    }
  },
  methods: {
    ...mapMutations(['userStatus']),
    inputfinish(){
      if(this.username && this.password){
        this.check()
      }else{
        this.$message.error('用户名或账号不能为空')
      }
    },
    check(){
      axios.post('./api/register/check',{
        username:this.username
      })
      .then(res => {
        console.log('res', res)
        if(res.data.code == 0){
          this.checkSucc()
        }else{
          this.$message.error(res.data.msg)
        }
      })
    },
    checkSucc(){
      axios.post('/api/register',{
        username:this.username,
        password:this.password  
      })
      .then(res => {
        if(res.status != 200){
          this.$message.error('注册失败');
        } else{
          //设置Vuex登录标志为true，默认userLogin为false
          // this.$store.dispatch("userLogin", true);
          this.userStatus(true)
          //Vuex在用户刷新的时候userLogin会回到默认值false，所以我们需要用到HTML5储存
          //我们设置一个名为Flag，值为isLogin的字段，作用是如果Flag有值且为isLogin的时候，证明用户已经登录了。
          localStorage.setItem("Flag", "isLogin");
          //iViewUi的友好提示
          this.$message({
            message: '注册成功',
            type: 'success'
          });
          //登录成功后跳转到指定页面
          this.$router.push("/");
        }
      })
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