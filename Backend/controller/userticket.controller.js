let userticketModel = require("../model/userticket.model");

// store the users ticket in userticket table
let storeduserticket = (request, response) => {
    let ticket = request.body;
    userticketModel.insertMany(ticket, (err, result) => {
        if (!err) {
            response.send("Record stored successfully")
        } else {
            response.send(err);
        }
    })
}
// let the admin read all tickets in userticket table
let getTicket = (request, response) => {
    userticketModel.find({}, (err, data) => {
        if (!err) {
            response.send(data);
        } else {
            response.send(err);
        }
    })
}

module.exports = { storeduserticket, getTicket }