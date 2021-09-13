let mongoose = require("mongoose");

mongoose.pluralize(null);

let adminSchema = mongoose.Schema({
    // admin login with ID and password
    _id : Number,
    pwd : String
});

let adminModel = mongoose.model("Admin",adminSchema);

module.exports=adminModel;