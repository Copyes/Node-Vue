// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
//import 'element-ui/lib/theme-default/index.css'; 
import App from './App';
import Axios from 'axios';
import router from './router';

Vue.use(ElementUI);
Vue.prototype.$http = Axios;
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
	const token = sessionStorage.getItem('token');

	if(to.path == '/'){
		if(token != null && token != 'null'){
			next('/todo-list');
		}
		next();
	}else{
		if(token != 'null' && token != null){
			Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
			next();
		}else{
			next('/');
		}
	}
});

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App }
})
