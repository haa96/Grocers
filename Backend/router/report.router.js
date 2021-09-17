let express = require("express");
let router = express.Router();
let reportController = require("../controller/report.controller");

router.get("/daily",reportController.dailyReport);
router.get("/weekly",reportController.weeklyReport);

module.exports=router;