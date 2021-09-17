let express = require("express");
let router = express.Router();
let reportController = require("../controller/report.controller");

console.log("In report router");
router.get("/daily",reportController.dailyReport);
router.get("/weekly",reportController.weeklyReport);
router.get("/monthly",reportController.monthlyReport);

module.exports=router;