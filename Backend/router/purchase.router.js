const express = require("express");
const router = express.Router();

const purchaseController = require("../controller/purchase.controller");

router.post("/storedpurchaset",purchaseController.storedpurchaset);

router.delete("/getAllpurchaset/:pid",purchaseController.getAllpurchaset);

module.exports=router;