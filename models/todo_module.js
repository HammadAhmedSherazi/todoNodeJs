const mongoose = require('mongoose');
const db = require('../config/db');
const UserModel = require('../models/user_module');
const { Schema } = mongoose;

const todoSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: UserModel.modelName
    },
    title:{
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true
    },
    isCheck:{
        type : Boolean,
        required: true

    }
});

const ToDoModel = db.model('todos', todoSchema);
module.exports = ToDoModel;