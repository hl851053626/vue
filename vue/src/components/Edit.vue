<template>
  <div>
    zheshi yige bianjiqi
    <mavonEditor v-model="content" ref="md" @imgAdd="$imgAdd" @change="changeMavon" />
    <el-button @click='upload'>上传</el-button>
  </div>
</template>

<script>
import axios from 'axios'
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";

export default {
  name: "Edit",
  components: {
    mavonEditor
  },
  data() {
    return {
      content: "",
      configs: {}
    }
  },
  methods: {
    changeMavon() {},
    $imgAdd() {},
    upload(){
      axios.post('http://127.0.0.1:3000/article/edit',{
        params:{
          content:this.content
        }
      })
        .then(console.log(111))
    }
  }
};
</script>

<style lang="stylus" scoped></style>