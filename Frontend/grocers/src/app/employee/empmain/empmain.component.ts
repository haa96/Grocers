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
  
  sendRef = new FormGroup({
    message:new FormControl(),
  })
  
  _id = '';
  
  updateRef = new FormGroup({
    _id:new FormControl(),
    pwd:new FormControl(),
  
  })
  unlockRef= new FormGroup({
    _id:new FormControl(),
  })
  

  constructor(public router:Router,public empSer:EmployeeService, public userSer:UserService) { }
  msg?:string;
  ngOnInit(): void {
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
     this.updateRef.reset();
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

openHome(){
  this.router.navigate([""]);
  
}
}