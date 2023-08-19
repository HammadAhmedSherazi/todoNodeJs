const express = require('express');

const body_parser = require('body-parser');
const userRouter =  require('./routers/user.routers');
const TodoRouter =  require('./routers/todo.router');
const app = express();

app.use(body_parser.json());

app.use('/', userRouter);
app.use('/', TodoRouter);

module.exports = app;