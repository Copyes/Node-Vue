const user = require('../models/user.js');
const jwt = require('koa-jwt');

const getUserInfo = function* (){
    const id = this.params.id;  // 获取url中传过来的参数
    const result = yield user.getUserById(id);  // 通过yield同步返回查询结果
    this.body = result;   // 将请求的结果放到response的body中
}

const postUserAuth = function* (){
    const data = this.request.body;
    const userInfo = yield user.getUserByName(data.name);

    if(userInfo !== null){
        if(userInfo.password !== data.password){
            this.body = {
                success: fasle,
                message: '密码错误！'
            }
        } else {
            const userToken = {
                name: userInfo.user_name,
                id: userInfo.id
            }
            const secret = 'vue-koa-fan';  // 指定的密钥，这个是后面用来判断token是否合法的标志
            const token = jwt.sign(userToken, secret); // 签发token
            this.body = {
                success: true,
                token: token  // 返回的token
            }
        }
    } else {
        this.body = {
            success: false,
            message: '用户不存在！'
        }
    }
}

module.exports = {
    auth: (router) => {
        router.get('/user/:id', getUserInfo);
        router.post('/user', postUserAuth);
    }
}