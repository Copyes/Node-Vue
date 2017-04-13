const todolist = require('../models/todolist.js');
// 获取待办任务列表
const getTodoList = function *(){
    const id = this.params.id;
    const result = yield todolist.getTodoListById(id);

    this.body = result;
}
// 创建待办任务
const createTodoList = function *(){
    const data = this.request.body;
    const result = yield todolist.createTodoList(data);

    this.body = {
        success: true
    }
}
// 删除任务
const removeTodoList = function *(){
    const id = this.params.id;
    const user_id = this.params.userId;

    const result = yield todolist.removeTodoList(id, user_id);
    
    this.body = {
        success: result
    }
}
// 更新任务状态
const updateTodoList = function *(){
    const id = this.params.id;
    const user_id = this.params.userId;
    let status = this.params.status;

    status == '0' ? status = true : status = false;

    const result = yield todolist.updateTodoList(id, user_id, status);

    this.body = {
        success: result
    }
}
module.exports = (router) => {
    router.get('/todolist/:id', getTodoList);
    router.post('/todolist', createTodoList);
    router.delete('/todolist/:userId/:id', removeTodoList);
    router.put('/todolist/:userId/:id/:status', updateTodoList)
}