let mongoose = require("mongoose");
mongoose.pluralize(null);       // to avoid creating in lower case with s postfix. 

let CartSchema = mongoose.Schema({
  _id: String, 
  quantity: Number,
  total: Number
});

let cartModel = mongoose.model("Cart", CartSchema);

module.exports=cartModel; 

