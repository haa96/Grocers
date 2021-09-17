let express = require("express");
let router = express.Router();
let reportController = require("../controller/report.controller");

// route to report controller function based upon sub path
router.get("/daily", reportController.dailyReport);
router.get("/weekly", reportController.weeklyReport);
router.get("/monthly", reportController.monthlyReport);

module.exports = router;