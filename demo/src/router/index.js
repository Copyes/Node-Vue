import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import TodoList from '@/components/TodoList'
Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Login',
			component: Login
		},
		{
			path: '/todo-list',
			name: 'TodoList',
			component: TodoList
		},
		{
			path: '*',
			redirect: '/'
		}
	]
})
