<template>
  <div class="home">
    <ul class="home-ul">
      <router-link tag='li' v-for='item of articleList' :key='item.id' class="home-li" :to="'/detail/' + item.id">
        <div class="header">
          <div class="title">
            {{item.title}}
          </div>
          <div class="author_dete">
            <span class="author">by {{item.author_name}}</span>
            <span class="date">{{item.date}}</span>
          </div>
        </div>
        <!-- <div class="content">{{item.paragraph}}</div> -->
        <!-- <router-link :to="'/detail/' + item.id" class="more">
          <div>查看更多</div>
        </router-link> -->
      </router-link>
    </ul>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name:'Home',
  data(){
    return{
      articleList:[],
      test: ''
    }
  },
  mounted() {
    axios.get('http://127.0.0.1:3000/home').then((res)=>{
      this.articleList = res.data.list
      console.log('art', this.articleList)
    })
  },
}
</script>

<style lang="stylus" scoped>
.home
  .home-ul
    .home-li  
      display flex
      flex-direction column
      justify-content space-around
      background #fff
      border-bottom 20px solid #eee
      list-style none
      .header
        display flex
        flex-direction row
        justify-content space-between
        width 100%
        height 100px
        line-height 100px
        .title
          cursor pointer
          display inline-block
          width 70%
          padding-left 10px 
          font-size 30px
          font-weight bold
          color #000
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        .title:hover
          color #FF8B17
        .author_dete 
          padding-right 10px
      .more
        font-size 20px
        color blue

</style>