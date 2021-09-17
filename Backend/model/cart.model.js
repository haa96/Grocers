let mongoose = require("mongoose");
mongoose.pluralize(null);  
// create the cart schema
let CartSchema = mongoose.Schema({
  _id: Number,
  name: String,
  price: Number,
  qty: Number,
  total: Number
});
let cartModel = mongoose.model("Cart", CartSchema);
module.exports = cartModel;