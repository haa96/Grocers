// load all modules
let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");

// create the reference of express
let app = express();

// import routers and models
let adminRouter = require("./router/admin.router");
let userRouter = require("./router/user.router");
let productRouter = require("./router/product.router");
let userticketRouter = require("./router/userticket.router");
let empRouter = require("./router/emp.router");
let proRequestRouter = require("./router/productrequest.router");
let purchaseRouter = require("./router/purchase.router");
let cartRouter = require("./router/cart.router");
let reportRouter = require("./router/report.router");
const adminModel = require("./model/admin.model");

// add middleware
app.use(cors());
app.use(bodyParser.json())

//url database
let url = "mongodb://localhost:27017/Grocers"

// connect the database
mongoose.connect(url).then(res => console.log("connected")).catch(error => console.log(error));
let db = mongoose.connection;

// listen for client request
app.listen(9090, () => console.log("Server running on port number 9090"))
db.once("open", () => {
    // if Admin Collection is empty, create and store a preset login
    let adminPreset = new adminModel({
        _id: 1234,
        pwd: 1234
    });
    if (adminModel.findOne({ _id: 1234 }) == null) {
        adminModel.create([adminPreset], (err, result) => {
            if (!err) {
                console.log(result);
            } else {
                console.log(err);
            }
        });
    }
    // http://localhost:9090/api/adminlogin/
    app.use("/api/admin", adminRouter);
    // http://localhost:9090/api/employee/
    app.use("/api/employee", empRouter);
    // http://localhost:9090/api/user/
    app.use("/api/user", userRouter);
    // http://localhost:9090/api/product/
    app.use("/api/product", productRouter);
    // http://localhost:9090/api/ticket/
    app.use("/api/ticket", userticketRouter);
    //http://localhost:9090/api/sendProductRequest
    app.use("/api/sendProductRequest", proRequestRouter);
    //http://localhost:9090/api/purchase/   
    app.use("/api/purchase", purchaseRouter);
    //http://localhost:9090/api/cart/
    app.use("/api/cart", cartRouter);
    //http://localhost:9090/api/report/
    app.use("api/report", reportRouter);

    mongoose.disconnect;
})