let proRequestModel = require("../model/productrequest.model");

// create a new request in Request table
let sendRequest = (request, response) => {
    let product = request.body;
    proRequestModel.insertMany(product, (err, result) => {
        if (!err) {
            response.send("Record stored successfully")
        } else {
            response.send(err);
        }
    })
}

module.exports = { sendRequest };