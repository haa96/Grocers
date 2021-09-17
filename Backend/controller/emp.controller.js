let empModel = require("../model/emp.model");

let addEmployee = (request, response) => {
    // get employee object and insert it into Emp table
    let employee = request.body;
    empModel.insertMany(employee, (err, result) => {
        if (!err) {
            response.send("Employee account created successfully")
        } else {
            response.send(err);
        }
    })
}
let deleteEmployee = (request, response) => {
    // match employee ID in Emp Collection and remove it
    let eid = request.params.eid;
    empModel.deleteOne({ _id: eid }, (err, result) => {
        if (!err) {
            response.send(result)
        } else {
            response.send(err);
        }
    })
}
let authenticateLogin = async (request, response) => {
    let employee = request.body;
    // if login credentials find a match return "Success"
    let empInfo = await empModel.findOne({ _id: employee.eid, pwd: employee.password });
    if (empInfo != null) {
        response.send("Success");
    } else {
        response.send("Failed");
    }
}
let updateEmployee = (request, response) => {
    let p = request.body;
    // match the employee ID in Emp table and update values
    empModel.updateOne({ _id: p._id }, { $set: { pwd: p.pwd, pwdUpdated: true } }, (err, result) => {
        if (!err) {
            response.send(result);
        } else {
            response.send(err);
        }
    })
}

module.exports = { addEmployee, deleteEmployee, updateEmployee, authenticateLogin };