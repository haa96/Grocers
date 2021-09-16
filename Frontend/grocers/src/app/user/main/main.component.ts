import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { SharedService } from 'src/app/shared.service';
import { Citem } from 'src/app/Cart.model';



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
  constructor(public ser: SharedService, public router: Router, public adminSer: AdminService, public activateRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.populateProducts();
  }
  cart() { this.router.navigate(["cart"]); }
  profile() { this.router.navigate(["profile"]); }

  populateProducts() {
    this.adminSer.getproductDetails().
      subscribe(data => {
        for (let i in data) {
          this.products.push({ id: data[i]._id, name: data[i].name, price: data[i].price })
        }
        console.log(this.products);
      }, error => console.error(error));
  }

  addcart(name: any, price: any, quantity: any) {
      this.total = price * quantity;
      let ite: Citem = { id: this.i, name: name, price: price, Qty: quantity, total: this.total };
      console.log(ite)
      this.carts.push(ite);
      this.ser.setCartArray(this.carts);
      this.i++
      this.item = this.ser.getCartArray()
      console.log(name)


      }
    }


