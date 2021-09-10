let mongoose = require("mongoose");

mongoose.pluralize(null);

let userSchema = mongoose.Schema({
    // user/customer ID
    _id : Number,
    firstName : Number,
    lastName : Number,
    email : String,
    pwd : String,
    address : String,
    // store balance
    balance : Number,
    // optionally store bank information for next funds transfer.
    bankCardNo : Number
});

let userModel = mongoose.model("User",userSchema);

module.exports=userModel;