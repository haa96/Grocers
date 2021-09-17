let express = require("express");
let router = express.Router();
let productController = require("../controller/product.controller");

// routes to product controller for product CRUD operations
router.delete("/deleteItem/:pid", productController.deleteItem);
router.get("/getProducts", productController.getAllproductsDetails);
router.post("/storeProduct", productController.storedProductInfo);
router.put("/updateProduct", productController.updateProduct);

module.exports = router;