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
    console.log(user);
    if(user.bankCardNo === ''){ user.bankCardNo=0; }
    user.locked = false;
    user.balance = 500;
    user._id = 1;
    
    let userInfo = await userModel.findOne({_id:user._id});
    if(userInfo==null){
        let result = await userModel.insertMany(user);
        response.send("Account created successfully");
    }else {
        while(userInfo != null){
            user._id++;
            userInfo = await userModel.findOne({_id:user._id});
        }
        result = await userModel.insertMany(user);
        response.send("Account created successfully");
    }    
}

let getUserDetails = (request,response)=> {
    let email = request.body;
    console.log(email);
    userModel.find({email:email},(err,data)=> {
        if(!err){
            console.log("The user is "+data);
            response.json(data);
        }else {
             response.send(err);   
        }
    })
}

module.exports={userlogin,register,getUserDetails};