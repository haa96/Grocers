import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { MainComponent } from './user/main/main.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { NotfoundComponent } from './notfound/notfound.component'
import { CartComponent} from'./cart/cart.component';
import { ProfileComponent } from './user/profile/profile.component';
const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"user",component:UserComponent},
  {path:"admin",component:AdminComponent},
  {path: "employee",component:EmployeeComponent},
  {path:"userPanel",component:UserPanelComponent
  {path:"profile",component:ProfileComponent},
  {path:"cart",component:CartComponent},
  {path:"",component:HomeComponent},
  {path:"main",component:MainComponent}
  {path:"",redirectTo:"home",pathMatch:"prefix"},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
