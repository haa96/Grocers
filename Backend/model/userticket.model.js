let mongoose = require("mongoose");

mongoose.pluralize(null);

let userticketSchema = mongoose.Schema({
    username : String,
    reason: String

});
let userticketModel = mongoose.model("userTicket",userticketSchema);

module.exports=userticketModel;