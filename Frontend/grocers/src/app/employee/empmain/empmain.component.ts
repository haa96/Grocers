import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-empmain',
  templateUrl: './empmain.component.html',
  styleUrls: ['./empmain.component.css']
})
export class EmpMainComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }



openHome(){
  this.router.navigate([""]);
  
}
}