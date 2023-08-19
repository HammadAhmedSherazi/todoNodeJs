const UserService = require('../services/user.services');
const  bcrypt  = require('bcrypt')

exports.register = async(req,res,next)=>{
    try{
        const {email, password, name} = req.body;
        
        const  successRes = await UserService.registerUser(email, password, name);
        res.json({
            status: true, message : 'Successfully User Registered!'
        });
    }  
    catch(err){
        throw err;
    }



};
exports.login = async(req, res, next)=>{
    try{
        const { email, password } = req.body;
        
        const userData = await UserService.checkUser(email);
        console.log("Userr  ....." +  userData);
        if(!userData || userData === null){
           return res.json({
                status: false, message : "User doesn't exists"
            });
            // throw new Error('User doesnot exist');
        }
    
        const isMatch = await userData.comparePasword(password);
    //    const isMatch = await bcrypt.compare(userData.password, password);
       
        if(!isMatch){
            // throw  Error('Password is Invalid')
          return  res.json({
                status: false, message : "Password is Invalid"
            });
        } 
        let tokenData = {_id: userData._id, email: userData.email};

        const token = await UserService.generateToken(tokenData,"SecreteKey","1h");
        res.status(200).json({status: true, token : token, message :"User Successfully", user: userData });   
    

        

       
    }
    catch(e){
        throw e;
    }
}
;