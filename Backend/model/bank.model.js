let mongoose = require("mongoose");

mongoose.pluralize(null);

let bankSchema = mongoose.Schema({
    cardNumber : Number,
    balance : Number
});

let bankModel = mongoose.model("Bank",bankSchema);

module.exports=bankModel;