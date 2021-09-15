import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  loginRef = new FormGroup({
    userAdmin:new FormControl(),
    passAdmin:new FormControl()
  });
  constructor(public dialog: MatDialog,  public router:Router) {}
  ngOnInit(): void {
  } 
  test(){}
  checkUser(){
    let login = this.loginRef.value;
    if(login.userAdmin=="Admin" && login.passAdmin=="123456"){
      this.router.navigate(["AdminPan"]);
    }else{
    this.dialog.open(AdminComponent);

    alert("YOUR Username or Your Password Is Wrong")
  }
  }
}
