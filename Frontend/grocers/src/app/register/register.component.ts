import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userRef = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    pwd: new FormControl(),
    phone: new FormControl(),
    dob: new FormControl(),
    address: new FormControl(),
    bankCardNo: new FormControl()
  })
  constructor(public router: Router, public userSer: UserService, public dialog: MatDialog) { }
  msg?: string;
  ngOnInit(): void {
  }
//Adds a User account
  addUser() {
    let user = this.userRef.value;
    console.log(user);
    this.userSer.createUserAccount(user).
      subscribe(result => this.msg = result, error => console.log(error));
    this.userRef.reset();
    alert("Your account has been created");
    this.dialog.open(UserComponent);
  }
//Return to home
  returnToLogin() {
    this.router.navigate(["home"]);
  }
}
