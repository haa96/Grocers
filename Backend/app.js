// load all modules
let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");
// create the reference of express
let app = express();
let adminRouter = require("./router/admin.router");
let userRouter = require("./router/user.router");
let productRouter = require("./router/product.router");
// add other routers as needed ....
let cartController = require("./router/cart.router");

// add middleware
app.use(cors());
app.use(bodyParser.json())

//url database
let url = "mongodb://localhost:27017/Grocers"

// connect the database
mongoose.connect(url).then(res=>console.log("connected")).catch(error=>console.log(error));

// middleware that helps watch main path and pass the request to router file

// http://localhost:9090/api/admin/
app.use("/api/admin",adminRouter);
// http://localhost:9090/api/user/
app.use("/api/user",userRouter);
// http://localhost:9090/api/product/
app.use("/api/product",productRouter);

// http://localhost:9090/api/cart/getAllCartItem
// http://localhost:9090/api/cart/deleteItem
// http://localhost:9090/api/cart/updateItemQuantity

app.use("/api/cart",cartController);

app.listen(9090,()=>console.log("Server running on port number 9090"))
