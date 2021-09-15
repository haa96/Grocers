import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  loginRef = new FormGroup({
    _id:new FormControl(),
    pwd:new FormControl()
  });
  constructor(
    public adminSer:AdminService,
    public dialog: MatDialog, 
    public router:Router) { }
    msg?:string;
  ngOnInit(): void {
  } 

  checkUser(){
    let admin = this.loginRef.value;
    this.adminSer.checkLoginDetails(admin).

    subscribe(result=>{
      if(result=="Success"){
        console.log("Success!");
        this.router.navigate(["AdminPan",admin._id]);
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
}
