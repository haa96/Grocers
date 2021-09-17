let express = require("express");
let router = express.Router();
let userticketController = require("../controller/userticket.controller");

// route to userticket.controller function based upon sub path
router.post("/storeduserticket", userticketController.storeduserticket);
router.get("/getTickets", userticketController.getTicket);

module.exports = router;