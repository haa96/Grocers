// load all modules 
let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");
let cartController = require("./router/cart.router");

// create the reference of express 
let app = express();

// add middleware 
app.use(cors());
app.use(bodyParser.json())

//url database 
let url = "mongodb://localhost:27017/tcsmean"

// connect the database 
mongoose.connect(url).then(res=>console.log("connected")).catch(error=>console.log(error));

// http://localhost:9090/api/cart/getAllCartItem
// http://localhost:9090/api/cart/deleteItem      
// http://localhost:9090/api/cart/updateItemQuantity

app.use("/api/cart",cartController);

app.listen(9090,()=>console.log("Server running on port number 9090"))