<template>
  <div class="home">
    <ul class="home-ul">
      <router-link
        tag="li"
        :to="'/detail/' + item.id"
        v-for="item of artList"
        :key="item.id"
        class="home-li"
        :content="item.paragraph"
				:id="item.id"
				@click='setArt'
      >
        <div class="title">{{item.title}}</div>
        <div class="name">{{item.name}}</div>
        <div class="date">{{item.date}}</div>
      </router-link>
    </ul>
		<button @click='setArt'></button>
  </div>
</template>

<script>
import axios from "axios"
import { mapMutations } from 'vuex'
export default {
  name: "home",
  data() {
    return {
      artList: []
    };
  },
  mounted() {
    axios({
      method: "POST",
      url: "/news/index"
    }).then(res => {
      this.artList = res.data.articles;
      console.log(res);
    });
    axios({
      method: "GET",
      url: "http://192.168.31.219:3000/users"
    }).then(res => {
      console.log(res);
    });
  },
	methods:{
		...mapMutations(['setArt'])
	}
};
</script>

<style lang="stylus" scoped>
.home {
  .home-ul {
    .home-li {
      width: 80vw;
      min-height: 200px;
      margin: 20px;
      text-decoration: none;
      list-style: none;
    }
  }
}
</style>
