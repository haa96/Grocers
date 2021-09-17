let express = require("express");
let router = express.Router();
let adminController = require("../controller/admin.controller");

// route to admin controller function based upon sub path
router.post("/adminlogin", adminController.adminlogin);

module.exports = router;