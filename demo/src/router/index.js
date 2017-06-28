import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import TodoList from '@/pages/todo-list'
import MoviesList from '@/pages/movies-list'
Vue.use(Router)

export default new Router({
	routes: [
		{	path: '/',	name: 'Login',	component: Login },
		{   path: '/todo-list',   name: 'TodoList',   component: TodoList },
		{	path: '/movies-list', name: 'MoviesList', component: MoviesList},
		{	path: '*',	redirect: '/'  }
	]
})
