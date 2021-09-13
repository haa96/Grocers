import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { EmployeeComponent } from './employee/employee.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dialog';
  constructor(public dialog: MatDialog) { }
  
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
