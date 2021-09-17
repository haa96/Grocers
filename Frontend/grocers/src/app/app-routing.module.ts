
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CartComponent } from './user/cart/cart.component';
import { ProfileComponent } from './user/profile/profile.component';
import { EmpMainComponent } from './employee/empmain/empmain.component'
import { MainComponent } from './user/main/main.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { ReportComponent } from './report/report.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  // admin main page (routes here after admin login)
  { path: "AdminPan/:admin", component: AdminpanelComponent },
  // Amin get the repot
  { path: "report", component: ReportComponent },
  //employee main page
  { path: "empmain", component: EmpMainComponent },
  // user registration path
  { path: "register", component: RegisterComponent },
  // main login portal page
  { path: "home", component: HomeComponent },
  // admin login page
  { path: "admin", component: AdminComponent },
  // admin main page (routes here after admin login)
  { path: "AdminPan", component: AdminpanelComponent },
  // employee login page
  { path: "employee", component: EmployeeComponent },
  // user profile
  { path: 'profile/:user', component: ProfileComponent },
  // cart page
  { path: "cart/:user", component: CartComponent },
  // main login portal page
  { path: "user", component: UserComponent },
  // for passing user information
  { path: 'main/:user', component: MainComponent },
  { path: "", component: HomeComponent },
  { path: "**", component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
