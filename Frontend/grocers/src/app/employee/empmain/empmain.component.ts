import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormControl, FormGroup,FormsModule } from '@angular/forms';
import { EmployeeService } from 'src/app/employee.service';
import {UserService} from 'src/app/user.service';
@Component({
  selector: 'app-empmain',
  templateUrl: './empmain.component.html',
  styleUrls: ['./empmain.component.css']
})
export class EmpMainComponent implements OnInit {
  _id = '';
  tickets=[];
  orders=[];
  sendRef = new FormGroup({
    request:new FormControl(),
  })

  
  updateRef = new FormGroup({
    _id:new FormControl(),
    pwd:new FormControl(),
  
  })
  unlockRef= new FormGroup({
    email:new FormControl(),
  })
  orderRef= new FormGroup({
    cID:new FormControl(),
    price:new FormControl(),
    status:new FormControl(),
  })

  

  constructor(public router:Router,public empSer:EmployeeService, public userSer:UserService) { }
  msg?:string;
  ngOnInit(): void {
    this.viewTickets();
    this.viewOrder();
  }
  updateemployee(){
    let prodcut = this.updateRef.value;
    console.log(prodcut);
     this.empSer.updateEmployeeDetails(prodcut).
     subscribe(result=>this.msg=result,error=>console.log(error));
     this.updateRef.reset();
     alert("The password updated successfully")
  }
unlockUser(){
  let prodcut = this.unlockRef.value;
    console.log(prodcut);
     this.userSer.userUnlock(prodcut).
     subscribe(result=>this.msg=result,error=>console.log(error));
     this.unlockRef.reset();
     alert("The account has been unlocked successfully")
}
sendRequest(){
  let prodcut = this.sendRef.value;
      console.log(prodcut);
       this.empSer.sendProductRequest(prodcut).
       subscribe(result=>this.msg=result,error=>console.log(error));
       this.sendRef.reset();
       alert("The product request has been sent successfully")
}
viewTickets(){
  this.empSer.getTicketDetails().
    subscribe(data=>{
      for(let i in data){
        this.tickets.push({id: data[i].username, reason:data[i].reason})
      }
        console.log(this.tickets);
    },error=> console.error(error));
  
}
updateOrder(){
  let prodcut = this.orderRef.value;
  console.log(prodcut);
   this.empSer.updateOrderStatusDetails(prodcut).
   subscribe(result=>this.msg=result,error=>console.log(error));
   this.unlockRef.reset();
   alert("The account has been updated successfully")
}
viewOrder(){
  this.empSer.getOrderDetails().
    subscribe(data=>{
      for(let i in data){
        this.orders.push({id: data[i].cID, price:data[i].price,stat:data[i].orderStatus})
      }
        console.log(this.orders);
    },error=> console.error(error));
  
}

openHome(){
  this.router.navigate([""]);
  
}
}