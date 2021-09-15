import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  loginRef = new FormGroup({
    email:new FormControl(),
    pwd:new FormControl()
  });
  constructor(
    public userSer:UserService,
    public dialog: MatDialog, 
    public router:Router) { }
    msg?:string;
  ngOnInit(): void {
  } 

  checkUser(){
    let user = this.loginRef.value;
    this.userSer.checkLoginDetails(user).
    subscribe(result=>{
      if(result=="Success"){
        console.log("Success!");
        this.router.navigate(["userPanel",user.email]);
      }else {
          this.msg = result;
      }
    },
    error=>console.log(error));
    this.loginRef.reset();

  //   let login = this.loginRef.value;
  //   if(login.userAdmin=="Admin" && login.passAdmin=="123456"){
  //     this.router.navigate(["AdminPan"]);
  //   }else{
  //   this.router.navigate(["admin"]);

  //   alert("YOUR Username or Your Password Is Wrong")
  // }
  }
  registerUser(){
    let user = this.loginRef.value;
  }
}

