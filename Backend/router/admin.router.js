let express = require("express");
let router = express.Router();
let adminController = require("../controller/admin.controller");

// use GET / POST / DELETE / PUT
// ex template: 
// router.post(".../pathNameHere", adminController.functionNameHere);

module.exports=router;