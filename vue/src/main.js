import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import axios from 'axios'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import './assets/reset.css'
import './assets/border.css' //1像素边框处理
require('./mock.js')

Vue.use(Element)
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
	router,
  store,
  render: h => h(App),
}).$mount('#app')
