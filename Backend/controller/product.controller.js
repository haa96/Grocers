let productModel = require("../model/product.model");

let updateProduct = (request,response)=> {
    let p = request.body;
    productModel.updateMany({_id:p._id},{$set:{qty:p.qty,price:p.price,discount:p.discount}},(err,result)=> {
        if(!err){
            response.send(result);
        }else {
            response.send(err);
        }
    })
}

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

let deleteItem = (request,response)=> {
    let pid = request.params.pid;
    productModel.deleteOne({_id:pid},(err,result)=> {
        if(!err){
            response.send(result)
        }else {
            response.send(err);
        }
    })
}
module.exports= {storedProductInfo,deleteItem,updateProduct}