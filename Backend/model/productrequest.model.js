let mongoose = require("mongoose");

mongoose.pluralize(null);

let productRequestSchema = mongoose.Schema({
    request: String,
    });

let proRequestModel = mongoose.model("Productrequest",productRequestSchema);

module.exports=proRequestModel;
