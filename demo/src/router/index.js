import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/pages/login';
import TodoList from '@/pages/todo-list';
import MoviesList from '@/pages/movies-list';
import Index from '@/pages/index';
import About from '@/pages/about';
import Posts from '@/components/c-posts';
Vue.use(Router)

export default new Router({
	routes: [
		{ path: '/',	name: 'Index',	component: Index,
			children: [
				{ path: '', component: Posts},
			]
		},
		{ path: '/login', name: 'Login', component: Login },
		// {	path: '/index', name: 'Index', component: Index },
		{ path: '/todo-list',   name: 'TodoList',   component: TodoList },
		{ path: '/movies-list', name: 'MoviesList', component: MoviesList},
		{ path: '/about', name: 'About', component: About},
		{ path: '*',	redirect: '/'  }
	]
})
