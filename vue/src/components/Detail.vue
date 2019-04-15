<template>
  <div class="detail">
      <div class="title">{{article.title}}</div>
      <div class="content" v-html='compiledMarkdown'></div>
  </div>
</template>

<script>
import axios from 'axios'
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';
 
marked.setOptions({
renderer: new marked.Renderer(),
gfm: true,
tables: true,
breaks: false,
pedantic: false,
sanitize: false,
smartLists: true,
smartypants: false,
highlight: function (code, lang) {
      if (lang && hljs.getLanguage(lang)) {    
        return hljs.highlight(lang, code, true).value;
      } else {
        return hljs.highlightAuto(code).value;
      }
  }
});
export default {
  name: "Detail",
  data(){
      return{
          article:{}
      }
  },
  mounted() {
    this.getInfo()
  },
  methods: {
    getInfo(){
      axios.get("http://127.0.0.1:3000/article",{
        params:{
          id:this.$route.params.id
        }
      })
        .then(this.getInfoSuccess);
    },
    getInfoSuccess(res){
      this.article = res.data.list[0]
    }
  },
  computed: {
    compiledMarkdown() {
        let paragraph = unescape(this.article.paragraph);
        return marked(paragraph || '', {
          sanitize: true
        })
    }
  },
};
</script>

<style lang="stylus" scoped>
  .detail >>> p,  .detail >>> ul>li,.detail >>> h1,.detail >>> h2,.detail >>> h3,.detail >>> h4,.detail >>> h5,.detail >>> h6
    line-height 30px
    margin 0 0 12px
  .detail
    .title
      width 100%
      text-align center
      font-size 35px
      line-height 60px
      padding-bottom 15px
    .content >>> pre
      margin 20px 0
      background #aaa
      padding 20px

</style>