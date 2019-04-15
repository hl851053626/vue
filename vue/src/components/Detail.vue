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
    },
    
  },
  computed: {
    compiledMarkdown() {
        let paragraph = this.article.paragraph;
        return marked(paragraph || '', {
          sanitize: true
        })
    }
  },
};
</script>

<style lang="stylus" scoped></style>