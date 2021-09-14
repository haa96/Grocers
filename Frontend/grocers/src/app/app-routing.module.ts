import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserpanelComponent } from './user/userpanel/userpanel.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CartComponent} from'./cart/cart.component';
import { ProfileComponent } from './user/profile/profile.component';


import { AdminpanelComponent} from'./adminpanel/adminpanel.component';
import { MainComponent } from './user/main/main.component';
import { ReportComponent } from './report/report.component';
const routes: Routes = [
  {path:"AdminPan",component:AdminpanelComponent},
  {path:"report",component:ReportComponent},
  {path:"profile",component:ProfileComponent},
  {path:"cart",component:CartComponent},
  {path:"**",component:NotfoundComponent},
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  // user login page
  {path:"user",component:UserComponent},
  // user main page
  {path:"userPanel",component:UserpanelComponent},
  // admin login page
  {path:"admin",component:AdminComponent},
  // employee login page
  {path: "employee",component:EmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
