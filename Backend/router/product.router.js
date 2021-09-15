// load the express module
let express = require("express");
// create the router reference to help
// route to controller function based upon sub path
let router=express.Router();
let productController = require("../controller/product.controller");

// use GET / POST / DELETE / PUT
// ex template: 
// router.post(".../pathNameHere", productController.functionNameHere);
router.delete("/deleteItem/:pid",productController.deleteItem);
router.post("/storeProduct",productController.storedProductInfo);

module.exports=router;