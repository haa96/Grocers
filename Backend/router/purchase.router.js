let express = require("express");
let router = express.Router();
let purchaseController = require("../controller/purchase.controller");

// use GET / POST / DELETE / PUT
// ex template:


router.post("/orderStatus", purchaseController.updateOrderStatus);
router.get("/getOrder",purchaseController.getOrder);
router.post("/storedpurchaset",purchaseController.storedpurchaset);
router.get("/getAllpurchaset",purchaseController.getAllpurchaset);

module.exports=router;