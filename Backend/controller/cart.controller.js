
let cartModel = require("../model/cart.model");


let getAllCartItem = (request,response)=> {
    
    cartModel.find({},(err,data)=> {
        if(!err){
            response.json(data);
        }else {
             response.json(err);   
        }
    })

}
let updateItemQuantity = (request,response)=> {
    let Cart = request.body;
    cartModel.updateOne({_id:Cart._id},{$set:{name:Cart.name,price:Cart.price,
        qty:Cart.quantity,total:Cart.total}},(err,result)=> {
        if(!err){
            response.send(result);
        }else {
            response.send(err);
        }
    })
}

let deleteItem = (request,response)=> {
    let pid = request.params.pid;
    cartModel.deleteOne({_id:pid},(err,result)=> {
        if(!err){
            response.send(result)
        }else {
            response.send(err);
        }
    })
}
module.exports= {getAllCartItem,deleteItem,updateItemQuantity}



