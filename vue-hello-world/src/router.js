import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Resume from './components/resume.vue'
import vueapp from './App.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
			meta:{
				title: "个人简历"
			}
		},{
			path: '/resume',
			name: 'resume',
			component: Resume
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () =>
				import( /* webpackChunkName: "about" */ './components/About.vue')
		}
	]
})
