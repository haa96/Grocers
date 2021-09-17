// load the model schema file
let adminModel = require("../model/admin.model");

// verify Admin ID and Password 
let adminlogin = async (request, response) => {
    //recieve the data from post method
    let admin = request.body;
    // if matching login credentials are found return success
    let adminInfo = await adminModel.findOne({ _id: admin._id, pwd: admin.pwd });
    if (adminInfo != null) {
        response.send("Success");
    } else {
        response.send("Invalid adminID or password");
    }
}

module.exports = { adminlogin };