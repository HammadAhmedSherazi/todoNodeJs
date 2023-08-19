const  ToDoService = require('../services/todo.services');

exports.createTodo = async (req, res, next)=>{
    try {
        const { userId,title,desc } = req.body;
        // console.log(req.body);
        let todo = await ToDoService.createTodo(userId, title, desc);

        res.json({status: true, message: "Todo Scucessfully Create", success: todo});
    } catch (error) {
        
    }
};
exports.getAllUserTodoList = async (req, res, next) => {
    try {
        const { userId } = req.body;
       
        let todos = await ToDoService.getAllUserTodoList(userId);
        
        res.json({status: 200, success: true, todos : todos});
    } catch (error) {
        
    }
};

exports.deleteTodo = async (req, res, next) => {
    try {
        const { id } = req.body;
       
        let deleteTodo = await ToDoService.deleteTodoItem(id);
        
        res.json({status: 200, success: true, todos : deleteTodo});
    } catch (error) {
        res.json({status: 400, success: false, message : "Todo not exist"});
    }

    
};

exports.updateTodo = async (req, res, next) => {
    try {
        
        let updateTodo = await ToDoService.updateTodo(req.body);
        
        res.json({status: 200, success: true, todo : updateTodo, message : "Todo updated successfully"});
    } catch (error) {
        res.json({status: 400, success: false, message : "Todo not exist"});
    }

    
};