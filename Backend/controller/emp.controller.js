let empModel = require("../model/emp.model");

let addEmployee=(request,response)=> {
    let employee = request.body;

    empModel.insertMany(employee,(err,result)=> {
        if(!err){
            response.send("Employee account created successfully")
        }else {
            response.send(err);
        }
    })
}

let deleteEmployee=(request,response)=> {
    let eid = request.params.eid;

    empModel.deleteOne({_id:eid},(err,result)=> {
        if(!err){
            response.send(result)
        }else {
            response.send(err);
        }
    })
}
let authenticateLogin= async(request,response)=> {
    let employee = request.body;
    console.log("attempting login",employee)
    let empInfo = await empModel.findOne({_id:employee.eid,pwd:employee.password});
    if(empInfo!=null){
        console.log("Success");
        response.send({"statusValue" : "Success"});
    }else {
        console.log("Invalid login");
        response.send({"statusValue" : "Failed"});
    }

}
let updateEmployee = (request,response)=> {
    let p = request.body;
    empModel.updateOne({_id:p._id},{$set:{pwd:p.pwd,pwdUpdated:true}},(err,result)=> {
        if(!err){
            response.send(result);
        }else {
            response.send(err);
        }
    })
}


module.exports= {addEmployee, deleteEmployee,updateEmployee,authenticateLogin};
