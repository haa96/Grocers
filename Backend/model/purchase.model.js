let mongoose = require("mongoose");

mongoose.pluralize(null);

let purchaseSchema = mongoose.Schema({

    // customer ID
    cID: Number,
    // the standard product total price
    price: Number,
    // the discount on the product
    orderStatus: String
});

let purchaseModel = mongoose.model("Purchase", purchaseSchema);

module.exports = purchaseModel;