// load the model schema file
let adminModel = require("../model/admin.model");

let adminlogin = async(request, response)=> {
    console.log("In admin controller");
    let admin = request.body; //recieve the data from post method
    let adminInfo = await adminModel.findOne({_id:admin._id,pwd:admin.pwd});
    if(adminInfo!=null){
        console.log("Success");
        response.send("Success");
    }else {
        console.log("Invalid login");
        response.send("Invalid adminID or password");
    }
}

module.exports={adminlogin};