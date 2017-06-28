const moviesService = require('../models/movies.js');

const getMoviesList = function *(){
	let page = parseInt(this.params.page);

	let list = yield moviesService.getMoviesList(page);

	let data = list;

	if(data && data.length > 0){
		this.body = {
			success: 'true',
			message: '获取数据成功',
			data
		}
	}else if (data && data.length == 0){
		this.body = {
			success: true,
			message: '没有数据～',
			data
		}
	}else{
		this.body = {
			success: false,
			message: '出错了～'
		}
	}
}


module.exports = (router) => {
	router.get('/list/:page', getMoviesList);
}