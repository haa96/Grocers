import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-userpanel',
  templateUrl: './userpanel.component.html',
  styleUrls: ['./userpanel.component.css']
})
export class UserpanelComponent implements OnInit {

  constructor(public router:Router) { }
  cart(){
    this.router.navigate(["cart"]);
  }
  profile(){
    this.router.navigate(["profile"]);
  }
  ngOnInit(): void {
  }

}
