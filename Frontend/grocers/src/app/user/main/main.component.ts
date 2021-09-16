import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  products =[];
  email = {"user" : ""};

  constructor(public router:Router,public adminSer:AdminService,public activeRoute:ActivatedRoute) { 
    // this.email = this.activeRoute.snapshot.queryParamMap.get('email');
    // console.log(this.email);
    this.activeRoute.params.subscribe(data=>{
      this.email.user=data.user;
      console.log(data);
      console.log(this.email);
    });
  }

  ngOnInit(): void {
    this.populateProducts();
  }
  cart(){this.router.navigate(["cart"]);}

  profile(){
    console.log("Profile function");
    console.log(this.email);
    this.router.navigate(["../../profile",this.email.user],{relativeTo:this.activeRoute})
    // ,relativeTo: this.activeRoute});
  // }
    // , queryParams: 
      // {email : this.email}

  }

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
