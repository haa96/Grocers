let express = require("express");
let router = express.Router();
let userController = require("../controller/user.controller");

// use GET / POST / DELETE / PUT
// ex template:
console.log("In User Router");
router.post("/userlogin", userController.userlogin);
router.post("/register", userController.register);
router.post("/unlock", userController.unlockUser);
module.exports=router;