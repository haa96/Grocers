import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { NotfoundComponent } from './notfound/notfound.component'
const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"user",component:UserComponent},
  {path:"admin",component:AdminComponent},
  {path: "employee",component:EmployeeComponent},
  {path:"userPanel",component:UserPanelComponent},
  {path:"",redirectTo:"home",pathMatch:"prefix"},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
