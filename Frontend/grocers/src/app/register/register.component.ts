import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormControl, FormGroup,FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userRef = new FormGroup({
    firstName:new FormControl(),
    lastName:new FormControl(),
    email:new FormControl(),
    pwd:new FormControl(),
    bankCardNo:new FormControl(),
  })
  constructor(public router:Router, public userSer:UserService) { }
  msg?:string;
  ngOnInit(): void {
  }

  addUser(){
    let user = this.userRef.value;
    console.log(user);
     this.userSer.createUserAccount(user).
     subscribe(result=>this.msg=result,error=>console.log(error));
     this.userRef.reset();
     alert("Your account has been created");
  }

}
