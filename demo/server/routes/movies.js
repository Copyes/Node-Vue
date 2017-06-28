const movies = require('../controllers/movies.js');
const router = require('koa-router')();

movies(router);
module.exports = router;
