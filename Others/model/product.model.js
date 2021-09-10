let mongoose = require("mongoose");

mongoose.pluralize(null);

let productSchema = mongoose.Schema({
    // productID 
    _id : Number,
    // name of product
    name : String,
    // brand of product (for sort product by brand)
    brand : String,
    // amount of product in stock
    qty : Number,
    // standard price
    price : Number,
    // optional discount
    discount : Number

});

let productModel = mongoose.model("Product",productSchema);

module.exports=productModel;