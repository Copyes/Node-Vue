const Sequelize = require('sequelize');

const TodoList = new Sequelize('mysql://root:123456@localhost/todolist',{
    define: {
        timestemps: false
    }
});

module.exports = {
    TodoList
}