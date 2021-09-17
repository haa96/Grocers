import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { Citem } from 'src/app/cart';
import { UserService } from 'src/app/user.service';
import { CartService } from 'src/app/cart.service'
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public activateRoute: ActivatedRoute, public router: Router, public userSer: UserService, public ser: SharedService, public cartSer: CartService) { }
  msg?: string;
  carts?: Array<Citem>;
  totalprice: number;
  cid = 1;
  carttotalprice = 0;
  userEmail?: string;
  email: string = "";
  balance?: number;
  
  ngOnInit(): void {
    this.activateRoute.params.subscribe(data => this.userEmail = data.user);
    this.loadData();
    this.getUser();
  }
  //Go to Main page
  main() {
    this.router.navigate(["main", this.userEmail]);
  }
 //Get Cart info
  loadData(): void {
    this.carts = this.ser.getCartArray();
  }
//Update Cart
  update(id: any, price: any, qty: any, total: any) {
    document.getElementById(total).innerHTML = "";
    this.totalprice = qty * price;
    let x = this.totalprice + "";
    document.getElementById(total).append("Total Price: " + x);
    this.carts[id].Qty = qty;
    this.carts[id].total = this.totalprice;

  }
//Get Order Details
  getFormInfo() {
    this.addRef = new FormGroup({
      cID: new FormControl(this.cid),
      price: new FormControl(this.carttotalprice),
      orderStatus: new FormControl('pending')
    })
  }
  addRef = new FormGroup({
    cID: new FormControl(this.cid),
    price: new FormControl(this.carttotalprice),
    orderStatus: new FormControl('pending')
  })
 //Remove from cart 
  remove(id: any) {
    this.carts.splice(id, 1)
    for (let i = 0; i < this.carts.length; i++) {
      this.carts[i].id = i
    }
  }
//Get User Details
  getUser() {
    this.userSer.getUserDetails(this.userEmail).
      subscribe(result => {
        this.email = result.email;
        this.balance = result.balance;
        this.cid = result._id
      }, error => console.log(error));
  }
 //Checkout- store the purchase/update funds 
  checkout() {
    for (let i = 0; i < this.carts.length; i++) {
      this.carttotalprice += this.carts[i].total
    }
    if (this.carttotalprice < this.balance) {
      let fund = this.balance - this.carttotalprice
      this.getFormInfo();
      let purchase = this.addRef.value;
      this.cartSer.storedpurchaset(purchase).
        subscribe(result => this.msg = result, error => console.log(error));
      this.addRef.reset();
      alert("Current Funf is: " + fund)
      this.carts = [];

      document.getElementById("funds").innerHTML = "Current Funds:" + fund;
    } else {
      alert("You Don't Have Enough Money")
      this.carttotalprice = 0;
    }
  }
}
