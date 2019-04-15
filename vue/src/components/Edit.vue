<template>
  <div>
    <el-input v-model="title" placeholder="请输入标题" required></el-input>
    <el-input v-model="author" placeholder="请输入作者名称"></el-input>
    <mavonEditor v-model="content" ref="md" @imgAdd="$imgAdd" @change="changeMavon"/>
    <el-button @click="upload">上传</el-button>
  </div>
</template>

<script>
import axios from "axios";
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
      configs: {},
      title:'',
      author:''
    };
  },
  methods: {
    changeMavon() {},
    $imgAdd() {},
    upload() {
      if((this.content && this.title )&& this.author){
        this.$confirm("是否保存", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        axios
          .post("http://127.0.0.1:3000/article/edit", {
            params: {
              author:this.author,
              title:this.title,
              date:this.date,
              content: this.content
            }
          })
          .then(this.$router.replace({ path: "/index" }));
        });
      }else{
       this.$alert('请输入完整内容', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: '请完成剩下的部分'
            });
          }
       })
      }
      
     
    }
  }
};
</script>

<style lang="stylus" scoped></style>