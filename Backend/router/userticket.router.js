// load the express module
let express = require("express");
// create the router reference to help
// route to controller function based upon sub path
let router=express.Router();
let userticketController = require("../controller/userticket.controller");


router.post("/storeduserticket",userticketController.storeduserticket);

module.exports=router;