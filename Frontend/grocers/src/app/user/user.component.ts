import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { RegisterComponent } from '../register/register.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  msg?: string;
  loginRef = new FormGroup({
    email: new FormControl(),
    pwd: new FormControl()
  });

  constructor(
    public userSer: UserService,
    public dialog: MatDialog,
    public router: Router,
    public activeRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
  }
  //  check the user validation
  checkUser() {
    let user = this.loginRef.value;
    this.userSer.checkUserDetails(user).
      subscribe(result => {
        if (result == "Success") {
          let email = user.email;
          this.router.navigate(["profile", email]);
        } else {
          this.msg = result;
        }
      },
        error => console.log(error));
    this.loginRef.reset();
  }

  registerUser() {
    this.dialog.open(RegisterComponent);
  }
}
