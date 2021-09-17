let purchaseModel = require("../model/purchase.model");

let dailyReport = async (request, response) => {
    console.log("In daily report controller")
    let today = Date();
    today.getDate();
    let report = request.body;
    let reportInfo = await purchaseModel.find({ date: today });
    if (reportInfo != null) {
        response.json(report);
    }
    else {
        response.log("No purchases from today");
        response.send("{purchases: none")
    }
}
let weeklyReport = async (request, response) => {
    let report = request.body;
    response.json(report);
}
let monthlyReport = async (request, response) => {
    let report = request.body;
    response.json(report);
}

module.exports = { dailyReport, weeklyReport, monthlyReport };