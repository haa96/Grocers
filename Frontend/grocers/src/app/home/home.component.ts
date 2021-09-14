import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AdminComponent } from '../admin/admin.component';
import { UserComponent } from '../user/user.component';
import { EmployeeComponent } from '../employee/employee.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'dialog';
  constructor(public dialog: MatDialog, public router:Router) { }

  ngOnInit(): void {
  }
  openDialogAdmin(){
    this.dialog.open(AdminComponent);
    
  }
  openDialogUser(){
    this.dialog.open(UserComponent);
  }
  openDialogEmployee(){
    this.dialog.open(EmployeeComponent);
  }
}
