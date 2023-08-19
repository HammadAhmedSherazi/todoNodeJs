 const mongoose = require('mongoose');

 const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/todoApp').on('open', ()=>{

    console.log('MongoDb Connected Successfully');
 }).on('error', ()=>{
    console.log('MongoDb Connection faild');
 });

 module.exports = connection;