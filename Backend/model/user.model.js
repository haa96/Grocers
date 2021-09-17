let mongoose = require("mongoose");
mongoose.pluralize(null);
// create user Schema
let userSchema = mongoose.Schema({
    _id: Number,
    firstName: String,
    lastName: String,
    email: String,
    pwd: String,
    dob: Date,
    address: String,
    phone: Number,
    balance: Number,
    // optionally store bank information for next funds transfer.
    bankCardNo: Number,
    // user account locks if they don't update password after 1st login
    locked: Boolean
});
let userModel = mongoose.model("User", userSchema);
module.exports = userModel;