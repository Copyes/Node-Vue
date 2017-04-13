const db = require('../config/db.js');
const todoModel = '../schema/list.js';

const TodoListDb = db.TodoList;  // 引入表

const TodoList = TodoListDb.import(todoModel);
// 查看任务列表
const getTodoListById = function *(id){
    const todolist = yield TodoList.findAll({
        where: {
            user_id: id
        },
        attributes: ['id', 'content', 'status'] // 只要返回这三个字断就好了。
    });

    return todolist;
}
// 增加任务
const createTodoList = function *(data){
    yield TodoList.create({
        user_id: data.id,
        content: data.content,
        status: data.status
    });

    return true;
}

// 修改任务状态
const updateTodoList = function *(id,user_id,status){
    yield TodoList.update({
        status
    },{
        where: {
            id,user_id
        }
    });

    return true;
}
// 删除任务
const removeTodoList = function *(id, user_id){
    yield TodoList.destroy({
        where: {
            id,
            user_id
        }
    });
    return true;
}
module.exports = {
    getTodoListById,
    createTodoList,
    updateTodoList,
    removeTodoList
}