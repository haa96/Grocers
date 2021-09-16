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
  user = {"email":""};
  firstName?:string;
  email:string = "";
  phone?:number;
  address?:string;

  constructor(public router:Router, public userSer:UserService, public activeRoute:ActivatedRoute, public user2:User){
    this.activeRoute.params.subscribe(data=>{
      this.user.email=data.user;
      console.log(data);
      console.log(this.user.email);
   })
  }

  ngOnInit(): void {
    this.getUser(this.user.email);
  }

  getUser(email) {
    console.log("getUser recieved "+email+" as an email");
    this.user2 = this.userSer.checkUserDetails(email).
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
    this.router.navigate(["main"]);  
  }

  test(){
    
  }
}
