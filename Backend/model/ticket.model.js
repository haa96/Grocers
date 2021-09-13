let mongoose = require("mongoose");

mongoose.pluralize(null);

let ticketSchema = mongoose.Schema({
    cID : Number,
    pID : Number,
    orderQty : Number,
    date : Date
});

let ticketModel = mongoose.model("Ticket",ticketSchema);

module.exports=ticketModel;