const db = require('../config/db.js');
const userModel = '../schema/user.js'; // 引入表结构

const TodoListDb = db.TodoList; // 引入数据库
const User = TodoListDb.import(userModel);  // 用sequelize的import方法引入表结构，实例化user;

const getUserById = function* (id){
    const userInfo = User.findOne({
        where: { id: id }
    });
    return userInfo;
};

const getUserByName = function* (name){
    const userInfo = User.findOne({
        where: { user_name: name }
    });

    return userInfo;
}

module.exports = {
    getUserById,
    getUserByName
}



// const userInfo = User.findOne({
//     where : { id : 1}
// });

// console.log(userInfo);