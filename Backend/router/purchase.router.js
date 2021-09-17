let express = require("express");
let router = express.Router();
let purchaseController = require("../controller/purchase.controller");

// route to purchase controller function based upon sub path
router.post("/orderStatus", purchaseController.updateOrderStatus);
router.get("/getOrder", purchaseController.getAllpurchaset);
router.post("/storedpurchaset", purchaseController.storedpurchaset);
router.get("/getAllpurchaset", purchaseController.getAllpurchaset);

module.exports = router;