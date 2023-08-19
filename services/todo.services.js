const ToDoModel = require('../models/todo_module');

class ToDoService{
    static async createTodo(userId, title, desc){
        console.log(userId);
        const createTodo = new ToDoModel({userId, title, desc, isCheck : false});
        return await createTodo.save();
    }

    static async getAllUserTodoList(userId){
        const todo = await ToDoModel.find({userId});
       
        return todo;
    }

    static async deleteTodoItem(id){
        const deleteItem = await ToDoModel.findOneAndDelete({_id : id});
       
        return deleteItem;
    }

    static async updateTodo(item){
        const filter = { _id: item._id };

    // The update containing the fields to be modified
    const update = { $set: item };

    // Additional options (optional)
    const options = { new: true };
        const updateItem = await ToDoModel.findOneAndUpdate(filter, update, options);
       
        return updateItem;
    }
    
}

module.exports = ToDoService;