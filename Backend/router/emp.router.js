let express = require("express");
let router = express.Router();
let empController = require("../controller/emp.controller");

// route to emp controller function based upon sub path
router.post("/storeEmployee", empController.addEmployee);
router.delete("/deleteEmployee/:eid", empController.deleteEmployee);
router.post("/login", empController.authenticateLogin);
router.put("/updateEmployee", empController.updateEmployee);

module.exports = router;