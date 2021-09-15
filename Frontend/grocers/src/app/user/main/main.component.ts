import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { SharedService } from 'src/app/shared.service';
import {MatDialog} from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']

})
export class MainComponent implements OnInit {
products =[];


constructor(public ser:SharedService,public router:Router,public adminSer:AdminService,public activateRoute:ActivatedRoute) { }

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
      this.products.push({name: data[i].name, price:data[i].price})
    }
      console.log(this.products);
  },error=> console.error(error));
}
addcart(){
  let x=25;
}

}
