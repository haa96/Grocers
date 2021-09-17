let mongoose = require("mongoose");

mongoose.pluralize(null);

let purchaseSchema = mongoose.Schema({
    
    cID : Number,
    price:Number,
    
    orderStatus : String,
    
});

let purchaseModel = mongoose.model("Purchase",purchaseSchema);

module.exports=purchaseModel;