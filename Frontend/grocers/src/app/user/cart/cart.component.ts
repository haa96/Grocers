import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { Cart } from '../../cart';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',

  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  user = {"email":""};
  carts?: Array<Cart>;
  totalprice: number;
  constructor(public router: Router, public ser: SharedService,public activeRoute:ActivatedRoute) { 
    this.activeRoute.params.subscribe(data=>{
      this.user.email=data.user;
      console.log(data);
      console.log(this.user.email);
   })
  }

  ngOnInit(): void {
    this.loadData();
  }
  main() {
    this.router.navigate(["main",this.user.email]);
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
  checkout(){


    console.log( this.carts)
    this.carts=[];
  }

}