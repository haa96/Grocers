import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  msg?:string;

  loginRef = new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  });

  constructor(
    public userSer:UserService,
    public dialog: MatDialog,
    public router:Router,
    public activeRoute:ActivatedRoute) {
     }

  ngOnInit(): void {
  }

  checkUser() {
    let user = this.loginRef.value;
    console.log(user);

    this.userSer.checkUserDetails(user).
    subscribe(result=>{
      if(result=="Success"){
        console.log("Success!");
        let email = user.email;
        this.router.navigate(["main",email]);
      }else {
          console.log("Invalid Login Credentials");
          this.msg = result;
      }
    },
    error=>console.log(error));
    this.loginRef.reset();
  }

  registerUser(){
    this.dialog.open(RegisterComponent);
  }
}
