let mongoose = require("mongoose");
mongoose.pluralize(null);
// create employee Schema
let empSchema = mongoose.Schema({
    _id: Number,
    firstName: String,
    lastname: String,
    username: String,
    pwd: String,
    // pwdUpdated set to No by default, Yes after 1st update.
    pwdUpdated: Boolean,
    salary: Number
});
let empModel = mongoose.model("Emp", empSchema);
module.exports = empModel;