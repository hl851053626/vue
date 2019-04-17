<template>
  <div>
    <Echarts :width='width' :height='height'/>
  </div>
</template>

<script>
import Echarts from '../common/echarts'
export default {
  name:'tongji',
  components:{
    Echarts
  },
  data(){
    return {
      width:'600px',
      height:'400px'
    }
  }
}
</script>

<style lang="stylus" scoped>
  
</style>