import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmpMainComponent} from './employee/empmain/empmain.component';
  
import { CartComponent} from'./cart/cart.component';
import { HomeComponent} from'./home/home.component';
import { ProfileComponent } from './user/profile/profile.component';
import { MainComponent } from './user/main/main.component';
const routes: Routes = [
  {path:"profile",component:ProfileComponent},
  {path:"main",component:MainComponent},
  {path:"cart",component:CartComponent},
  {path:"",component:HomeComponent},
  {path:"empmain",component:EmpMainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
