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
let userticketRouter = require("./router/userticket.router");
let empRouter = require("./router/emp.router");

// add other routers as needed ....
let cartController = require("./router/cart.router");
const adminModel = require("./model/admin.model");

// add middleware
app.use(cors());
app.use(bodyParser.json())

//url database
let url = "mongodb://localhost:27017/Grocers"

// connect the database
mongoose.connect(url).then(res=>console.log("connected")).catch(error=>console.log(error));
let db = mongoose.connection;
app.listen(9090,()=>console.log("Server running on port number 9090"))

db.once("open",()=> {
// middleware that helps watch main path and pass the request to router file
let adminPreset = new adminModel({
    _id:1234,
    pwd:1234
});
console.log(adminPreset);
// if(adminModel.find({_id:1234}) == null){
    adminModel.create([adminPreset],(err,result)=> {
    if(!err){
        console.log(result);
    }else {
        console.log(err);
    }
});
// }

// http://localhost:9090/api/adminlogin
app.use("/api/admin",adminRouter);
// http://localhost:9090/api/user/login
app.use("/api/user",userRouter);
// http://localhost:9090/api/product/
app.use("/api/product",productRouter);
// http://localhost:9090/api/ticket/
app.use("/api/ticket",userticketRouter);
// http://localhost:9090/api/employee/
app.use("/api/employee",empRouter);



app.use("/api/cart",cartController);

mongoose.disconnect;
})

