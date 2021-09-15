import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup,FormsModule } from '@angular/forms';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {
  _id = '';
  addRef = new FormGroup({
    _id:new FormControl(),
    name:new FormControl(),
    brand:new FormControl(),
    qty:new FormControl(),
    price:new FormControl(),
    discount:new FormControl(),

  })
  deleteRef = new FormGroup({
    _id:new FormControl(),
  })
  updateRef = new FormGroup({
    _id:new FormControl(),
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
      let prodcut = this.addRef.value;
      console.log(prodcut); 
       this.adminSer.addproductDetails(prodcut).
       subscribe(result=>this.msg=result,error=>console.log(error));
       this.addRef.reset();    
       alert("The product added successfully")
    }
    deleteproduct(){
      let prodcut = this.deleteRef.value;
      this.adminSer.deleteproductDetails(prodcut._id).
      subscribe(result=>this.msg=result,error=>console.log(error));
      this.deleteRef.reset(); 
      alert("The product deleted successfully")
    }
    updateproduct(){
      let prodcut = this.updateRef.value;
      console.log(prodcut); 
       this.adminSer.updateproductDetails(prodcut).
       subscribe(result=>this.msg=result,error=>console.log(error));
       this.updateRef.reset();    
       alert("The product updated successfully")
    }
}
