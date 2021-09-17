import { Component } from '@angular/core';
import { Router } from '@angular/router';

<<<<<<< Updated upstream
=======
import { MatDialog } from '@angular/material/dialog';



>>>>>>> Stashed changes
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  flag:boolean;
  constructor(
<<<<<<< Updated upstream
    public router:Router) { }
=======
    public router: Router) { }
  Signout() {
    this.router.navigate([""]);

  }
>>>>>>> Stashed changes
}
