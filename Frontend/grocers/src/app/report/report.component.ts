import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportService } from '../report.service';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  constructor(public router: Router, public reportSer: ReportService) { }

  ngOnInit(): void {
    this.getDaily();
    this.getWeekly();
  }
//Route to AdminPanel
  Adminpan() { this.router.navigate(["AdminPan"]); }
//Get Daily Report
  getDaily() {
    let report = this.reportSer.dayReport().
      subscribe(result => {
      }, error => console.log(error));
  }
 //Get Weekly Report 
  getWeekly() {
    let report = this.reportSer.dayReport().
      subscribe(result => {
      }, error => console.log(error));
  }
}
