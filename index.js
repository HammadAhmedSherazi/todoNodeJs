const app = require('./app');

const db = require('./config/db');

// const UserModel = require('./models/user_module')
const ToDoModel = require('./models/todo_module')


const port = 5000;

app.listen(port, ()=>{

    console.log('Server is Running'); 
});
app.get('/', (req, res)=>{
    res.send('Hello Worldsdassds');
});
// app.post('/signup', (req, res)=>{

// });
