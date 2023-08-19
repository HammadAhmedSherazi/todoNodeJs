const router = require('express').Router();

const ToDoController = require('../controllers/todo.controller');

router.post('/saveTodo', ToDoController.createTodo);
router.post('/getTodosList', ToDoController.getAllUserTodoList);
router.post('/deleteTodo', ToDoController.deleteTodo);
router.patch('/updateTodo', ToDoController.updateTodo);     



module.exports = router;