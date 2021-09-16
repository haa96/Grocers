import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import {MatDialog} from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
products =[];
email : any;

constructor(public router:Router,public adminSer:AdminService,public activeRoute:ActivatedRoute) { 
  this.activeRoute.params.subscribe(data=>this.email=data);
}

ngOnInit(): void {
  this.populateProducts();
}
cart(){this.router.navigate(["cart"]);}

profile(){this.router.navigate(["profile"]);}

populateProducts(){
  //alert("here");
  this.adminSer.getproductDetails().
  subscribe(data=>{
    for(let i in data){
      this.products.push({name: data[i].name, price:data[i].price, qty:data[i].qty})
    }
      console.log(this.products);
  },error=> console.error(error));

}
}
