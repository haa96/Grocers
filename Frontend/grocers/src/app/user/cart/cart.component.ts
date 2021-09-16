import { Component, OnInit,Input  } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { Emp } from 'src/app/Emp.model';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',

  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public router:Router,public ser:SharedService) { }
  employees?:Array<Emp>;

  ngOnInit(): void {
    this.loadData();
  }
  main(){
    this.router.navigate(["main"]);

  }

  loadData(): void {
    this.employees=this.ser.getEmpArray();
  }
}
