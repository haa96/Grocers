import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  loginRef = new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  });

  constructor(
    public userSer:UserService,
    public router:Router) { }
    msg?:string;

  ngOnInit(): void {
  }

  checkUser() {
    let user = this.loginRef.value;
    console.log(user);

    this.router.navigate(["userPanel"]);

    this.userSer.checkUserDetails(user).
    subscribe(result=>{
      if(result=="Success"){
        // this.router.navigate(["userPanel",user.email]);
        this.router.navigate(["userPanel"]);
      }else {
        this.msg = result;
      }
    },

  error=>console.log(error));
  this.loginRef.reset();
  }

  registerUser() {

  }
}
