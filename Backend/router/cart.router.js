const express = require("express");
const router = express.Router();

const cartController = require("../controller/cart.controller");

router.post("/storedCartInfo",cartController.storedCartInfo);
router.get("/getAllCartItem",cartController.getAllCartItem);
router.put("/updateItem",cartController.updateItemQuantity);
router.delete("/deleteItem/:pid",cartController.deleteItem);

module.exports=router;