import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from 'src/app/cart.service';
import { User } from '../../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
  public router:Router,
  public activateRoute:ActivatedRoute,
  public userSer:UserService,
  public cartSer:CartService
  ){}
  updateRef = new FormGroup({
    firstName:new FormControl(),
    lastName:new FormControl(),
    email:new FormControl(),
    pwd:new FormControl(),
    address:new FormControl(),
    phone:new FormControl(),
  })

  orders=[];
  msg?:string;
  userEmail?:string;
  firstName?:string;
  lastName?:string;
  email?:string = "";
  phone?:number;
  address?:string;
  balance?:number;

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data=>this.userEmail=data.user);
    this.getUser();
    this.OrderStatus();

  }
  main(){this.router.navigate(["main",this.userEmail]);}
  test(){}

  getUser() {
    console.log(this.userEmail);
    this.userSer.getUserDetails(this.userEmail).
    subscribe(result=>{
      console.log(result);
      this.firstName = result.firstName;
      this.lastName = result.lastName;
      this.email=result.email;
      this.phone=result.phone;
      this.address=result.address;
      this.balance=result.balance;
      console.log(this.firstName+this.email+this.address+this.phone);
    }, error=>console.log(error));

  }

  updateInfo(){
    let user = this.updateRef.value;
    console.log(user);
     this.userSer.updateUserDetails(user).
     subscribe(result=>this.msg=result,error=>console.log(error));
     this.updateRef.reset();
     alert("info updated successfully")
     this.getUser();
  }

  OrderStatus() {
    this.cartSer.getOrders().
      subscribe(data => {
        for (let i in data) {
          this.orders.push({ id: data[i]._id, price: data[i].price, orderStatus: data[i].orderStatus })
        console.log(this.orders)
        }
        console.log(this.orders);
      }, error => console.error(error));
  }
}
