import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    article:0
  },
  mutations:{
    setArt(state){
      console.log(1)
      state.article ++
    }
  },
  actions:{}
})