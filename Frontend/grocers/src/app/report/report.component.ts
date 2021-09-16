import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Report } from './../report';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(public router:Router, public report:Report){ }
  ngOnInit(): void {
  }
  Adminpan(){
    this.router.navigate(["AdminPan"]);  }
}
