<template>
  <div class="home">
    <ul class="home-ul">
      <li v-for='item of articleList' :key='item.id' class="home-li">
        <div class="header">
          <router-link :to="'/detail/' + item.id">
            <span class="title">{{item.title}}</span>
          </router-link>
          <div class="author_dete">
            <span class="author">by {{item.author_name}}</span>
            <span class="date">{{item.date}}</span>
          </div>
        </div>
        <div class="content">{{item.paragraph}}</div>
        <router-link :to="'/detail/' + item.id">
          <div class="more">查看更多</div>
        </router-link>
      </li>
    </ul>
    <div>{{test}}</div>
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
    })
  },
}
</script>

<style lang="stylus" scoped>
.home
  .home-ul
    .home-li  
      min-height 200px
      background #fff
      margin-top 20px
      list-style none
      .header
        width 100%
        height 100px
        line-height 100px
        .title
          display inline-block
          width 70%
          font-size 30px
          font-weight bold
          color #000
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        .author_dete 
          display inline-block
          width 30%
          float right
          text-align right
      .more
        font-size 20px
        color blue

</style>