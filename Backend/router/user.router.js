let express = require("express");
let router = express.Router();
let userController = require("../controller/user.controller");

// use GET / POST / DELETE / PUT
// ex template:
router.post("/userlogin", userController.userlogin);
router.post("/userregister", userController.register);
router.get("/getUser", userController.getUserInfo);
router.put("/updateUser",userController.updateUserInfo);
router.post("/unlock", userController.unlockUser);

module.exports=router;
