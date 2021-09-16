
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CartComponent} from'./cart/cart.component';
import { ProfileComponent } from './user/profile/profile.component';
import {EmpMainComponent} from './employee/empmain/empmain.component'
import { MainComponent } from './user/main/main.component';
import { AdminpanelComponent} from'./adminpanel/adminpanel.component';
import { ReportComponent } from './report/report.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  // admin main page (routes here after admin login)
  {path:"AdminPan/:admin",component:AdminpanelComponent},
  {path:"AdminPan",component:AdminpanelComponent},
  {path:"report",component:ReportComponent},
  {path:"cart",component:CartComponent},
  {path:"empmain",component:EmpMainComponent},
  // user registration path
  {path:"register",component:RegisterComponent},
  // main login portal page
  {path:"home",component:HomeComponent},
  // user login page
  {path:"user",component:UserComponent},
  // {path:"profile",component:ProfileComponent},
  // user main page
  {path:"main",component:MainComponent},

  // {path:"main/:email",component:MainComponent},
  // admin login page
  {path:"admin",component:AdminComponent},
  // employee login page
  {path: "employee",component:EmployeeComponent},
  // {path:"profile/:email",component:ProfileComponent},
  {path:"profile",component:ProfileComponent},

  // path not found and no path routes
  {path:"",component:HomeComponent},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
