import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {
  productRef = new FormGroup({
    _id:new FormControl(),
    name:new FormControl(),
    brand:new FormControl(),
    qty:new FormControl(),
    price:new FormControl(),
    discount:new FormControl(),

  })
  constructor(public router:Router,public adminSer:AdminService) { }
  msg?:string;

  ngOnInit(): void {
  }
  Report(){
    this.router.navigate(["report"]);  }
    addproduct(){
      let prodcut = this.productRef.value;
      console.log(prodcut); 
       this.adminSer.addproductDetails(prodcut).
       subscribe(result=>this.msg=result,error=>console.log(error));
       this.productRef.reset();    
       alert("The product added successfully")
    }
}
