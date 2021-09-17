
let userticketModel = require("../model/userticket.model");

let storeduserticket = (request,response)=> {
    let ticket  = request.body;

    userticketModel.insertMany(ticket ,(err,result)=> {
        if(!err){
                response.send("Record stored successfully")
        }else {
                response.send(err);
        }
    })
}
let getTicket = (request,response)=> {
    
    userticketModel.find({},(err,data)=> {
        if(!err){
            response.send(data);
        }else {
             response.send(err);   
        }
    })

}
module.exports= {storeduserticket,getTicket}


