<template>
  <div>
    <el-row :gutter="10">
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="0"><div class="grid-content bg-purple"></div></el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="12"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="12"><div class="grid-content bg-purple"></div></el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="0"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
    <button @click='position'>获取地理位置</button>
    <div style='color:#fff'>{{latitude}},{{longitude}}.....{{err}}</div>
  </div>  
</template>

<script>
export default {
  name:'test',
  data(){
    return{
      latitude:'11',
      longitude:'11',
      err:''
    }
  },
  methods: {
    position(){
      navigator.geolocation.getCurrentPosition(this.SuccCB, this.ErrCB)
    },
    SuccCB(position){
      console.log(position)
      this.latitude = position.coords.latitude
      this.longitude = position.coords.longitude
      console.log(1)
    },
    ErrCB(err){
      console.log(err)
      this.err = err.message
      console.log(2)
    }
  },
}
</script>

<style>
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
