let userModel = require("../model/user.model");

// verify user login against User table
let userlogin = async (request, response) => {
    let user = request.body; //recieve the data from post method
    let userInfo = await userModel.findOne({ email: user.email, pwd: user.pwd });
    if (userInfo != null) {
        response.send("Success");
    } else {
        response.send("Invalid email or password");
    }
}
// create a new user in User table
let register = async (request, response) => {
    let user = request.body;    // receive the data from post method
    if (user.bankCardNo === '') { user.bankCardNo = 0; }
    user.locked = true;
    user.balance = 500;
    user._id = 1;
    let userInfo = await userModel.findOne({ _id: user._id });
    if (userInfo == null) {
        let result = await userModel.insertMany(user);
        response.send("Account created successfully");
    } else {
        while (userInfo != null) {
            user._id++;
            userInfo = await userModel.findOne({ _id: user._id });
        }
        result = await userModel.insertMany(user);
        response.send("Account created successfully");
    }
}
// change status of account from 'locked' to 'unlocked'
let unlockUser = (request, response) => {
    let p = request.body;
    userModel.updateOne({ email: p.email }, { $set: { locked: false } }, (err, result) => {
        if (!err) {
            response.send(result);
        } else {
            response.send(err);
        }
    })
}
// match email and return user information in User table
let getUserInfo = async (request, response) => {
    let user = request.body; //recieve the data from post method
    let userInfo = await userModel.findOne(user.email);
    if (userInfo != null) {
        response.json(userInfo);
    } else {
        response.send("user not found");
    }
}
// match email and update the details in the User table
let updateUserInfo = (request, response) => {
    let user = request.body;
    userModel.updateMany({ email: user.email }, { $set: { firstName: user.firstName, lastName: user.lastName, email: user.email, pwd: user.pwd, phone: user.phone, address: user.address } }, (err, result) => {
        if (!err) {
            response.send(result);
        } else {
            console.log("didn't update!");
        }
    })
}

module.exports = { userlogin, register, unlockUser, updateUserInfo, getUserInfo };