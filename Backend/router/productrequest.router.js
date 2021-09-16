let express = require("express");
let router = express.Router();
let productrequestController = require("../controller/productrequest.controller");

router.post("/sendProductRequest",productrequestController.sendRequest);

module.exports=router;