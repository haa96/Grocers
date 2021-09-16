import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { Citem } from 'src/app/Cart.model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',

  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public router: Router, public userSer:UserService,public ser: SharedService) { }
  carts?: Array<Citem>;
  totalprice: number;
  carttotalprice=0;
  userEmail?:string;
  email:string = "";
  balance?:number;
    ngOnInit(): void {
    this.loadData();
  }
  main() {
    this.router.navigate(["main/:user"]);

  }

  loadData(): void {
    this.carts = this.ser.getCartArray();
  }


  update( id: any,price: any, qty: any, total:any) {
    document.getElementById(total).innerHTML = "";
    this.totalprice = qty * price;
    let x = this.totalprice + "";
    document.getElementById(total).append("Total Price: " + x);
    this.carts[id].Qty=qty;
    this.carts[id].total=this.totalprice;
    console.log( this.carts)
  }


  remove(id: any) {
    this.carts.splice(id, 1)
    for(let i=0;i<this.carts.length;i++){
      this.carts[i].id=i
    }

  }
  getUser() {
    this.userSer.getUserDetails(this.userEmail).
    subscribe(result=>{     
      this.email=result.email;
      this.balance=result.balance;
    }, error=>console.log(error));
  }

  checkout(){
    for(let i=0;i<this.carts.length;i++){
      this.carttotalprice+= this.carts[i].total
    }
    if(this.carttotalprice< this.balance){
      console.log( this.carttotalprice)
      let fund=this.balance-this.carttotalprice
      alert("Your Funf is: "+fund)
      this.carts=[];
    }else{
      alert("You Don't Have Enough Money")
    }

  
  }

}