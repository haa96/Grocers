const express = require("express");
const router = express.Router();

const purchaseController = require("../controller/purchase.controller");

router.post("/storedpurchaset",purchaseController.storedpurchaset);

router.get("/getAllpurchaset",purchaseController.getAllpurchaset);

module.exports=router;