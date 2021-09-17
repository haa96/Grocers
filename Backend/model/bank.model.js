let mongoose = require("mongoose");
mongoose.pluralize(null);
// create bank schema
let bankSchema = mongoose.Schema({
    cardNumber: Number,
    balance: Number
});
let bankModel = mongoose.model("Bank", bankSchema);
module.exports = bankModel;