import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public router:Router, public userUser:UserService, public activateRoute:ActivateRoute){}
  name?:string;
  email?:string;
  phone?:number;
  address?:string;
  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    let user = this.loginRef.value;

    console.log(user);

    this.userSer.checkUserDetails(user).
    subscribe(result=>{
      if(result=="Success"){
        console.log("Success!");
        this.router.navigate(["main"]);
      }else {
          console.log("Invalid Login Credentials");
          this.msg = result;
      }
    },
    error=>console.log(error));
    this.loginRef.reset();
  }
  main(){
    this.router.navigate(["main"]);  
  }

test(){
  
}
}
