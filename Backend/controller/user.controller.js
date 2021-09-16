let userModel = require("../model/user.model");

// create functions
let userlogin = async (request, response)=> {
    let user = request.body; //recieve the data from post method
    let userInfo = await userModel.findOne({email:user.email,pwd:user.pwd});
    if(userInfo!=null){
        response.send("Success");
    }else {
        response.send("Invalid email or password");
    }
}
let register = async (request,response)=> {
    let user = request.body;    // receive the data from post method
    let userInfo = await userModel.findOne({email:user.email});
    if(userInfo==null){
        let result = await userModel.insertMany(user);
        response.send("Account created successfully");
    }else {
        response.send("Email Id must be unqiue");
    }    
}
let unlockUser = (request,response)=> {
    let p = request.body;
    userModel.updateOne({_id:p._id},{$set:{locked:false}},(err,result)=> {
        if(!err){
            response.send(result);
        }else {
            response.send(err);
        }
    })
}
module.exports={userlogin,register,unlockUser};