const mongoose = require('mongoose');

const db = require('../config/db');
const  bcrypt  = require('bcrypt')
const { Schema } = mongoose;

const userSchema = new Schema({
    email:{
        type: String,
        lowercase : true,
        required : true,
        unique : true 
    },
    name:{
        type: String,
        lowercase : true,
        required : true,
        
    },
    password :{
        type: String,
        required: true
    }
});


userSchema.pre('save', async function (){
    try{
        let user = this;
        console.log(user)
        const salt = await (bcrypt.genSalt(10));
        const hashpass = await bcrypt.hash(user.password, salt);

        user.password = hashpass;
    }
    catch(e){
        throw e;
    }
})

userSchema.methods.comparePasword = async function(userPassword){
    try{
       const isMatch = await bcrypt.compare(userPassword, this.password);
        return isMatch;
    }
    catch(e){
        throw e;
    }

}
const UserModel = db.model('user', userSchema);
module.exports = UserModel;