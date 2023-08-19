const UserModel = require('../models/user_module');
const jwt = require('jsonwebtoken');


class UserService{
    static  async registerUser(email, password, name){
        try{
            const createUser = new  UserModel({email, password, name});
            return await createUser.save();
        }
        catch(e){
            throw new Error(`ererererere`, e)
        }
    }

    static async checkUser(email) {

        try{
            const user = await UserModel.findOne({email});
            return user ;
        }
        catch(e){
            throw e
            
        }

    }

    static async generateToken(tokenData, secretKey, jwt_expire){
       
           return jwt.sign(tokenData, secretKey,{expiresIn:jwt_expire})  

        
    }
}

module.exports = UserService;
