<template>
  <div id="app">
    <el-row class="wrap">
      <el-col><router-view class="header"/></el-col>
      <el-col :span='5'><router-view class="header" name='header'/></el-col>
      <el-col :span='19'><router-view class="main" name='main'/></el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style lang='stylus' scoped>
  #app
    .wrap
      .header
        min-height 100vh
        text-align center
        background #202020
        
      .main 
        padding-left 30px
        min-height 100vh
        background #eee
</style>
