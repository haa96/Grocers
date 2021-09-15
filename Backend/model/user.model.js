let mongoose = require("mongoose");

mongoose.pluralize(null);

let userSchema = mongoose.Schema({
    // user/customer ID
    _id : Number,
    firstName : String,
    lastName : String,
    email : String,
    pwd : String,
    dob : Date,
    address : String,
    phone : Number,
    // store balance
    balance : Number,
    // optionally store bank information for next funds transfer.
    bankCardNo : Number,
    locked : Boolean
});


let userModel = mongoose.model("User",userSchema);

module.exports=userModel;