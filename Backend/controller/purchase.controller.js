let purchaseModel = require("../model/purchase.model");
let updateOrderStatus = (request,response)=> {
    let p = request.body;
    
    purchaseModel.updateOne({cID:p.cID},{$set:{orderStatus:p.status}},(err,result)=> {
        if(!err){
            response.send(result);
        }else {
            response.send(err);
        }
    })
}
let getOrder = (request,response)=> {

    purchaseModel.find({},(err,data)=> {
        if(!err){
            response.send(data);
        }else {
             response.send(err);
        }
    })

}

let storedpurchaset = (request,response)=> {
    let Cart = request.body;

    purchaseModel.insertMany(Cart,(err,result)=> {
        if(!err){
                response.send("Record stored successfully")
        }else {
                response.send(err);
        }
    })
}
let getAllpurchaset= (request,response)=> {
    
    purchaseModel.find({},(err,data)=> {
        if(!err){
            response.json(data);
        }else {
             response.json(err);   
        }
    })

}

module.exports={updateOrderStatus,getOrder,getAllpurchaset,storedpurchaset};




