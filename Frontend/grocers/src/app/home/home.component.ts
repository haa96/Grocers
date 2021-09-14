import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
// import { AdminComponent } from './admin/admin.component';
// import { UserComponent } from './user/user.component';
// import { EmployeeComponent } from './employee/employee.component';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
// import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
  }
  // title = 'dialog'; 
  constructor(public dialog: MatDialog, public router:Router) { }
  
  openDialogAdmin(){
    // this.dialog.open(AdminComponent);
    this.router.navigate(["admin"]);
  }
  openDialogUser(){
    // this.dialog.open(UserComponent);
    this.router.navigate(['user']);
  }
  openDialogEmployee(){
    // this.dialog.open(EmployeeComponent);
    this.router.navigate(['employee']);
  }

}
