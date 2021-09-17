let express = require("express");
let router = express.Router();
let productrequestController = require("../controller/productrequest.controller");

// route to productrequest controller function based upon sub path
router.post("/sendProductRequest", productrequestController.sendRequest);

module.exports = router;