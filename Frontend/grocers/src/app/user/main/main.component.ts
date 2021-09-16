import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { SharedService } from 'src/app/shared.service';
import { Emp } from 'src/app/Emp.model';
import { QueryValueType } from '@angular/compiler/src/core';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']

})
export class MainComponent implements OnInit {
products =[];
emps:Array<Emp>=[];
counterqty=1;
total: number;
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
      this.products.push({id:data[i]._id,name: data[i].name, price:data[i].price})
    }
      console.log(this.products);
  },error=> console.error(error));
}

addcart(name:any,price:any,quantity:any){
  
  this.total=price*quantity;
   let emp1:Emp={name:name,price:price,Qty:quantity, total:this.total};
   console.log(emp1)
  this.emps.push(emp1);
  this.ser.setEmpArray(this.emps);

}


// storeData(idRef:any,nameRef:any){
//   // let emp1:Emp={id:idRef.value,name:nameRef.value};
//   // this.emps.push(emp1);
//   // this.ser.setEmpArray(this.emps);   // pass array to setter function.
// }
}
