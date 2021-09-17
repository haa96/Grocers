import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import {MatDialog} from '@angular/material/dialog';
import { SharedService } from 'src/app/shared.service';
import { Citem } from 'src/app/cart';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']

})
export class MainComponent implements OnInit {
  products = [];
  item?: Array<Citem> = [];

  carts: Array<Citem> = [];
  counterqty = 1;
  total: number;
  i = 0;
  constructor(public ser: SharedService, public router: Router, public userSer:UserService,
     public adminSer: AdminService, public activateRoute: ActivatedRoute) { }
     msg?:string;
     userEmail?:string;
     firstName?:string;
     lastName?:string;
     email:string = "";
     balance?:number;
  ngOnInit(): void {
    this.activateRoute.params.subscribe(data=>this.userEmail=data.user);
    this.getUser();
    this.populateProducts();
  }
  cart() { this.router.navigate(["cart",this.userEmail]); }
  profile() { this.router.navigate(["profile",this.userEmail]); }

  profile(){
    console.log("Profile function");
    console.log(this.email);
    this.router.navigate(["profile",this.email.user]);
  }
  getUser() {
    console.log(this.userEmail);
    this.userSer.getUserDetails(this.userEmail).
    subscribe(result=>{
      console.log(result);
      this.firstName = result.firstName;
      this.lastName = result.lastName;
      this.email=result.email;
      this.balance=result.balance;
      console.log(this.firstName+this.email);
    }, error=>console.log(error));
  }

  cart(){
    console.log("Cart function");
    console.log(this.email);
    this.router.navigate(["cart",this.email.user]);}

  addcart(name: any, price: any, quantity: any) {
      this.total = price * quantity;
      let item: Cart = { id: this.i, name: name, price: price, Qty: quantity, total: this.total };
      console.log(item)
      this.carts.push(item);
      this.sharedSer.setCartArray(this.carts);
      this.i++
      this.item = this.sharedSer.getCartArray()
      console.log(name)
    }

  populateProducts(){
    this.adminSer.getproductDetails().
    subscribe(data=>{
      for(let i in data){
        this.products.push({name: data[i].name, price:data[i].price, qty:data[i].qty})
      }
        console.log(this.products);
    },error=> console.error(error));
  }

}
