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
module.exports={updateOrderStatus,getOrder};