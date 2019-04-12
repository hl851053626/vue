import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../pages/home/home'
import detail from '../pages/detail/detail'
import register from '../pages/register/register'


Vue.use(VueRouter)
export default new VueRouter({
	mode:'history',
	routes:[
		{
			path:'/',
			component:home
		},
		{
			path: '/detail/:id',
			component: detail
		},
		{
			path: '/register',
			component: register
		}
	]
})