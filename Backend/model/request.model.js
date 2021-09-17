let mongoose = require("mongoose");
mongoose.pluralize(null);
// create request schema
let requestSchema = mongoose.Schema({
    eID: Number,
    pID: Number,
    setQty: Number,
    setDiscount: Number,
    date: Date
});
let requestModel = mongoose.model("Request", requestSchema);
module.exports = requestModel;