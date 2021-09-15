let mongoose = require("mongoose");

mongoose.pluralize(null);

let purchaseSchema = mongoose.Schema({
    // product ID
    pID : Number,
    // customer ID
    cID : Number,
    // quantity of product purchased
    qty : Number,
    // the standard product price
    price : Number,
    // the discount on the product
    discount : Number,
    // the date purchased
    date : Date,
    
    orderStatus : String
});

let purchaseModel = mongoose.model("Purchase",purchaseSchema);

module.exports=purchaseModel;