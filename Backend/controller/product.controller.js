let productModel = require("../model/product.model");



let storedProductInfo = (request,response)=> {
    let product = request.body;

    productModel.insertMany(product,(err,result)=> {
        if(!err){
                response.send("Record stored successfully")
        }else {
                response.send(err);
        }
    })
}

module.exports= {storedProductInfo}