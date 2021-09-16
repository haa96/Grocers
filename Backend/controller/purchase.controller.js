
let purchaseModel = require("../model/purchase.model");

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


module.exports= {getAllpurchaset,storedpurchaset}



