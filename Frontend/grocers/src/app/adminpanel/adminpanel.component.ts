import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  Report(){
    this.router.navigate(["report"]);  }
}
