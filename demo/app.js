const app = require('koa')();
const koa = require('koa-router')();
const json = require('koa-json');
const logger = require('koa-logger');
const bodyparser = require('koa-bodyparser');

app.use(bodyparser());
app.use(json());
app.use(logger());
app.use(function * (next){
	let start = new Date();
	console.log("step1")
	yield next;
	let ms = new Date - start;
	console.log('%s %s - %s', this.method, this.url, ms);
});

app.on('error', function(err, ctx){
	console.log('server error', err);
});

app.listen(8999, () => {
	console.log('Koa is listening in 8889');
});

module.exports = app;