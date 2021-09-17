import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/admin.service';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {
  _id = '';
  addRef = new FormGroup({
    _id: new FormControl(),
    name: new FormControl(),
    brand: new FormControl(),
    qty: new FormControl(),
    price: new FormControl(),
    discount: new FormControl(),
  })
  deleteRef = new FormGroup({
    _id: new FormControl(),
  })
  updateRef = new FormGroup({
    _id: new FormControl(),
    qty: new FormControl(),
    price: new FormControl(),
    discount: new FormControl(),
  })
  addempeRef = new FormGroup({
    _id: new FormControl(),
    firstName: new FormControl(),
    lastname: new FormControl(),
    username: new FormControl(),
    pwd: new FormControl(),
    pwdUpdated: new FormControl(),
    salary: new FormControl(),
  })
  delempRef = new FormGroup({
    _id: new FormControl(),
  })
  constructor(public router: Router, public adminSer: AdminService, public empSer: EmployeeService) { }
  msg?: string;

  ngOnInit(): void {
  }
  Report() { this.router.navigate(["report"]); }

  addproduct() {
    let prodcut = this.addRef.value;
    this.adminSer.addproductDetails(prodcut).
      subscribe(result => this.msg = result, error => console.log(error));
    this.addRef.reset();
    alert("The product added successfully")
  }
  deleteproduct() {
    let product = this.deleteRef.value;
    this.adminSer.deleteproductDetails(product._id).
      subscribe(result => this.msg = result, error => console.log(error));
    this.deleteRef.reset();
    alert("The product deleted successfully")
  }
  updateproduct() {
    let prodcut = this.updateRef.value;
    this.adminSer.updateproductDetails(prodcut).
      subscribe(result => this.msg = result, error => console.log(error));
    this.updateRef.reset();
    alert("The product updated successfully")
  }
  addemployee() {
    let employee = this.addempeRef.value;
    this.empSer.addEmployeeDetails(employee).
      subscribe(result => this.msg = result, error => console.log(error));
    this.addempeRef.reset();
    alert("The employee added successfully")
  }
  deleteemployee() {
    let employee = this.delempRef.value;
    this.empSer.deleteEmployeeDetails(employee._id).
      subscribe(result => this.msg = result, error => console.log(error));
    this.delempRef.reset();
    alert("The employee deleted successfully")
  }
}
