<template>
  <div class="detail">
    这是详情页
    <router-link to="/">{{article}}</router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "detail",
  props: {
  },
  mounted() {
    axios({
      method: "POST",
      url: "/news/index"
    }).then(res => {
      this.artList = res.data.articles;
      console.log(res);
    });
  },
  computed: {
    ...mapState(["article"])
  },
  mounted() {
    console.log(this.content);
  }
};
</script>

<style>
</style>
