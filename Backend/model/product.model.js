let mongoose = require("mongoose");
mongoose.pluralize(null);
// create product schema
let productSchema = mongoose.Schema({
    _id: Number,
    name: String,
    brand: String,
    qty: Number,
    price: Number,
    discount: Number
});
let productModel = mongoose.model("Product", productSchema);
module.exports = productModel;