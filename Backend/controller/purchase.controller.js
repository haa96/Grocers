let purchaseModel = require("../model/purchase.model");

// update order status for orders of particular customers
let updateOrderStatus = (request, response) => {
    let p = request.body;
    purchaseModel.updateOne({ cID: p.cID }, { $set: { orderStatus: p.status } }, (err, result) => {
        if (!err) {
            response.send(result);
        } else {
            response.send(err);
        }
    })
}
// store a new purchase
let storedpurchaset = (request, response) => {
    let Cart = request.body;
    purchaseModel.insertMany(Cart, (err, result) => {
        if (!err) {
            response.send("Record stored successfully")
        } else {
            response.send(err);
        }
    })
}
// return all purchased item information
let getAllpurchaset = (request, response) => {
    purchaseModel.find({}, (err, data) => {
        if (!err) {
            response.json(data);
        } else {
            response.json(err);
        }
    })
}

module.exports = { updateOrderStatus, getAllpurchaset, storedpurchaset };