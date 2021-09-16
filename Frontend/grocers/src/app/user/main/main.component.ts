import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import {MatDialog} from '@angular/material/dialog';
import { SharedService } from 'src/app/shared.service';
import { Cart } from '../../cart';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']

})
export class MainComponent implements OnInit {
  products =[];
  email = {"user" : ""};
  item?: Array<Cart> = [];
  carts: Array<Cart> = [];
  counterqty = 1;
  total: number;
  i = 0;

  constructor(public router:Router,public adminSer:AdminService,public activeRoute:ActivatedRoute,
    public sharedSer:SharedService) {
    this.activeRoute.params.subscribe(data=>{
      this.email.user=data.user;
      console.log(data);
      console.log(this.email);
    });
  }

  ngOnInit(): void {
    this.populateProducts();
  }

  profile(){
    console.log("Profile function");
    console.log(this.email);
    this.router.navigate(["profile",this.email]);
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
