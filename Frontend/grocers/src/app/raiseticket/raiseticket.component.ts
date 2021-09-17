import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { RaiseticketService } from 'src/app/raiseticket.service';

@Component({
  selector: 'app-raiseticket',
  templateUrl: './raiseticket.component.html',
  styleUrls: ['./raiseticket.component.css']
})
export class RaiseticketComponent implements OnInit {
  username = '';
  ticketRef = new FormGroup({
    username: new FormControl(),
    reason: new FormControl()
  });
  constructor(public router: Router, public raiseticketService: RaiseticketService) { }
  msg?: string;
  ngOnInit(): void {
  }
  //Makes a ticket
  checkUser() {
    let user = this.ticketRef.value;
    this.raiseticketService.addproductDetails(user).
      subscribe(result => this.msg = result, error => console.log(error));
    this.ticketRef.reset();
    alert("Ticket has been raised successfully")
  }
}
