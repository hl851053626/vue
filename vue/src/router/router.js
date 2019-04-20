import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '../components/Header'
import Home from '../components/Home'
import Detail from '../components/Detail'
import About from '../components/About'
import Edit from '../components/Edit'
import Tongji from '../components/Tongji'
import Register from '../components/Register'
import test from '../components/test'
import Login from '../components/Login'


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
			},
			meta:{
				isLogin: true
			}
		},
		{
			path: '/detail/:id',
			name: 'detail',
			components: {
				header: Header,
				main: Detail
			},
			meta: {
				isLogin: true
			}
		},
		{
			path: '/about',
			name: 'about',
			components: {
				header: Header,
				main: About
			},
			meta: {
				isLogin: true
			}
		},
		{
			path:'/edit',
			name:'edit',
			components: {
				header: Header,
				main: Edit
			},
			meta: {
				isLogin: true
			}
		},
		{
			path:'/tongji',
			name:'tongji',
			components: {
				header: Header,
				main: Tongji
			},
			meta: {
				isLogin: true
			}
		},
		{
			path: '/register',
			name: 'register',
			component: Register
		},
		{
			path: '/test',
			name: 'test',
			component: test
		},
	{
			path: '/login',
			name: 'login',
			component: Login
		}
	]
})