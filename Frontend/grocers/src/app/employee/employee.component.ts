import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
  loginRef = new FormGroup({
    eid: new FormControl(),
    password: new FormControl()
  });
  constructor(public router: Router,
    public dialog: MatDialog,
    public employeeservice: EmployeeService,
    public http: HttpClient) { }

  ngOnInit(): void {}
  //employee login... then direct to employee portal
  openEmpMain() {
    let employee = this.loginRef.value;
    console.log(employee)
    this.employeeservice.performLogin(employee).subscribe(res => {
        console.log(res, res.statusValue);
        if (res === "Success") {
          this.router.navigate(["empmain"]);
        }
        else {
          console.log("Login Failed")
        }
      })
  }

}