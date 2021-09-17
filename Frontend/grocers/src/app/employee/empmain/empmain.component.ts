import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from 'src/app/employee.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-empmain',
  templateUrl: './empmain.component.html',
  styleUrls: ['./empmain.component.css']
})
export class EmpMainComponent implements OnInit {
  _id = '';
  tickets = []; // tickets array for ngFor raised ticket 
  orders = []; // orders array for ngFor order status
  sendRef = new FormGroup({
    request: new FormControl(),
  })

// employee update profile form controls
  updateRef = new FormGroup({
    _id: new FormControl(),
    pwd: new FormControl(),
  })
  // unlock user form controls
  unlockRef = new FormGroup({
    email: new FormControl(),
  })
  // order status update form controls
  orderRef = new FormGroup({
    cID: new FormControl(),
    price: new FormControl(),
    status: new FormControl(),
  })

  constructor(public router: Router, public empSer: EmployeeService, public userSer: UserService) { }
  msg?: string;
  ngOnInit(): void {
    this.viewTickets();
    this.viewOrder();
  }
  
  //updates employee info, send info to backend thruogh employee service.ts
  updateemployee() {
    let employee = this.updateRef.value;
    this.empSer.updateEmployeeDetails(employee).
      subscribe(result => this.msg = result, error => console.log(error));
    this.updateRef.reset();
    alert("The password updated successfully")
  }

  //unlock user, send info to backend thruogh user service.ts
  unlockUser() {
    let unlock = this.unlockRef.value;
    this.userSer.userUnlock(unlock).
      subscribe(result => this.msg = result, error => console.log(error));
    this.unlockRef.reset();
    alert("The account has been unlocked successfully")
  }

  // send product request to backend through employee service.ts
  sendRequest() {
    let req = this.sendRef.value;
    this.empSer.sendProductRequest(req).
      subscribe(result => this.msg = result, error => console.log(error));
    this.sendRef.reset();
    alert("The product request has been sent successfully")
  }

  //get all raised ticket send request to backend thruogh employee service.ts
  viewTickets() {
    this.empSer.getTicketDetails().
      subscribe(data => {
        for (let i in data) {
          this.tickets.push({ id: data[i].username, reason: data[i].reason })
        }
        console.log(this.tickets);
      }, error => console.error(error));
  }

  //updates order status, send info to backend (purchase model) thruogh employee service.ts 
  updateOrder() {
    let order = this.orderRef.value;
    this.empSer.updateOrderStatusDetails(order).
      subscribe(result => this.msg = result, error => console.log(error));
    this.unlockRef.reset();
    alert("The account has been updated successfully")
  }

  //displays all orders
  viewOrder() {
    this.empSer.getOrderDetails().
      subscribe(data => {
        for (let i in data) {
          this.orders.push({ id: data[i].cID, price: data[i].price, stat: data[i].orderStatus })
        }
        console.log(this.orders);
      }, error => console.error(error));
  }
  Signout(){this.router.navigate([""]);}
}