let userModel = require("../model/user.model");

// create functions
let login = async (request, response)=> {
    let user = request.body; //recieve the data from post method
    let userInfo = await userModel.findOne({email:user.email,pwd:user.pwd});
    if(adminInfo!=null){
        response.send("Success");
    }else {
        response.send("Invalid email or password");
    }
}


module.exports={login}