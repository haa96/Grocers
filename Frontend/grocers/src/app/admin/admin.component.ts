import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  loginRef = new FormGroup({
    _id: new FormControl(),
    pwd: new FormControl()
  });
  constructor(
    public adminSer: AdminService,
    public dialog: MatDialog,
    public router: Router) { }
  msg?: string;
  ngOnInit(): void {
  }

  //checks admin credentials from DB, then navigate to admin panel 
  checkUser() {
    let admin = this.loginRef.value;
    this.adminSer.checkLoginDetails(admin).
      subscribe(result => {
        if (result == "Success") {
          this.router.navigate(["AdminPan", admin._id]);
        } else {
          this.msg = result;
        }
      },
        error => console.log(error));
    this.loginRef.reset();
  }
}
