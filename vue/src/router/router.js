import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '../components/Header'
import Home from '../components/Home'
import Detail from '../components/Detail'
import About from '../components/About'
import Edit from '../components/Edit'
import Tongji from '../components/Tongji'



Vue.use(VueRouter)
export default new VueRouter({
	mode:'history',
	routes: [
		{
			path: '/',
			redirect: 'index'
		},
		{
			path: '/index',
			name: 'index',
			components: {
				header: Header,
				main: Home
			}
		},
		{
			path: '/detail/:id',
			name: 'detail',
			components: {
				header: Header,
				main: Detail
			}
		},
		{
			path: '/about',
			name: 'about',
			components: {
				header: Header,
				main: About
			}
		},
		{
			path:'/edit',
			name:'edit',
			components: {
				header: Header,
				main: Edit
			}
		},
		{
			path:'/tongji',
			name:'tongji',
			components: {
				header: Header,
				main: Tongji
			}
		}
	]
})