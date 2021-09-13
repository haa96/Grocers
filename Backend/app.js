// load all modules 
let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");
// create the reference of express 
let app = express();

// add middleware 
app.use(cors());
app.use(bodyParser.json())

//url database 
let url = "mongodb://localhost:27017/Grocers"

// connect the database 
mongoose.connect(url).then(res=>console.log("connected")).catch(error=>console.log(error));



app.listen(9090,()=>console.log("Server running on port number 9090"))