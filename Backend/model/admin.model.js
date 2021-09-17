let mongoose = require("mongoose");
mongoose.pluralize(null);
// create the admin Schema
let adminSchema = mongoose.Schema({
    _id: Number,
    pwd: String
});
let adminModel = mongoose.model("Admin", adminSchema);
module.exports = adminModel;