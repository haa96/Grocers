const express = require("express");
const router = express.Router();
const cartController = require("../controller/cart.controller");

// route to cart controller function based upon sub path
router.get("/getAllCartItem", cartController.getAllCartItem);
router.put("/updateItem", cartController.updateItemQuantity);
router.delete("/deleteItem/:pid", cartController.deleteItem);

module.exports = router;