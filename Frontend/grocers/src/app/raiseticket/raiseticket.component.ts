import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-raiseticket',
  templateUrl: './raiseticket.component.html',
  styleUrls: ['./raiseticket.component.css']
})
export class RaiseticketComponent implements OnInit {
  username = '';
  ticketRef = new FormGroup({
    username:new FormControl(),
    reason:new FormControl()
  });
  constructor(public dialog: MatDialog,  public router:Router) { }

  ngOnInit(): void {
  }
  checkUser(){
alert("Your tecket submit successfully")
  }
}
