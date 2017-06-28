const app = require('koa')();
const koaRouter = require('koa-router')();
const json = require('koa-json');
const logger = require('koa-logger');
const bodyparser = require('koa-bodyparser');
const auth = require('./server/routes/auth.js');
const api = require('./server/routes/api.js');
const movies = require('./server/routes/movies.js');

const jwt = require('koa-jwt');

app.use(bodyparser());
app.use(json());
app.use(logger());

app.use(function *(next){
	let start = new Date();

	yield next;
	let ms = new Date() - start;
	console.log('%s %s - %s', this.method, this.url, ms);
});

app.use(function *(next){
	try{
		yield next;
	}catch(err){
		if(401 == err.status){
			this.status = 401;
			this.body = {
				success: false,
				token: null,
				message: 'Protected resource, use Authorization header to get access'
			}
		}else{
			throw(err);
		}
	}
});

app.on('error', function(err, ctx){
	console.log('server error', err);
});

koaRouter.use('/auth', auth.routes());
koaRouter.use('/api', jwt({secret: 'vue-koa-fan'}), api.routes());
koaRouter.use('/movies', movies.routes());


app.use(koaRouter.routes());

app.listen(8999, () => {
	console.log('Koa is listening in 8999');
});

module.exports = app;