<template>
    <div class="header">
        <div class="information">
            <div class="pic"><img src="../../public/image/pic.jpg" alt=这是你的头像></div>
            <div class="name">洪 亮</div>
        </div>
        <div class="list">
            <ul class="list-ul">
                <router-link tag='li' v-for='item of list' :key='item.index' :to='item.path' class="list-li">{{item.desc}}</router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'Header',
    data(){
        return{
            list:[
                {
                    path:'/index',
                    desc:'index'
                },
                {
                    path:'/about',
                    desc:'about'
                },
                {
                    path:'detail',
                    desc:'detail'
                }
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
  .information
      height 300px
      .pic
          width 100px
          height 100px
          padding 50px 0
          margin 0 auto
          img 
              width 100px
              height 100px
              border-radius 50% !important
      .name
          font-size 20px
          color #fff
          text-align center
  .list
      .list-ul
          width 80%
          margin 0 auto
          padding 0
          .list-li
              width 100%
              heigth 30px
              line-height 30px
              margin-top 20px
              cursor pointer
              text-decoration none
              list-style none
              font-size 20px
              color #fff
              border-bottom 1px dashed #eee
          .list-li:hover
              color #E5E510

</style>