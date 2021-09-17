let mongoose = require("mongoose");
mongoose.pluralize(null);
// create product request schema
let productRequestSchema = mongoose.Schema({
    request: String,
});
let proRequestModel = mongoose.model("Productrequest", productRequestSchema);
module.exports = proRequestModel;