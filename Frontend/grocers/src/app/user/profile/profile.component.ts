import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { User } from '../../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userEmail: {"email":""};
  firstName?:string;
  email:string = "";
  phone?:number;
  address?:string;

  constructor(public router:Router, public userSer:UserService, public activeRoute:ActivatedRoute){
    this.activeRoute.params.subscribe(data=>{
      console.log("data is "+data);
      console.log("data.user is "+data.user);
      this.email=data.user;
      console.log(data);
   })
  }

  ngOnInit(): void {
    // console.log("Calling Get User");
    // this.getUser(this.userEmail.email);
  }

  getUser(data) {
    console.log("getUser recieved "+data+" as an email");
    let user = this.userSer.checkUserDetails(data).
    subscribe(result=>{
        console.log(result);
        this.firstName = result.firstName;
        this.email=result.email;
        this.phone=result.phone;
        this.address=result.address;
        console.log(this.firstName+this.email+this.address+this.phone);
      }, error=>console.log(error));
  }

  main(){
    console.log("email is: "+this.email);
    this.router.navigate(["main",this.email]);  
  }

  test(){
    
  }
}
