let express = require("express");
let router = express.Router();
let userController = require("../controller/user.controller");

// use GET / POST / DELETE / PUT
// ex template:
router.post(".../login", userController.userLogin);

module.exports=router;