import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent} from'./cart/cart.component';
import { HomeComponent} from'./home/home.component';
import { ProfileComponent } from './user/profile/profile.component';
import { MainComponent } from './user/main/main.component';

const routes: Routes = [
  {path:"profile",component:ProfileComponent},
  {path:"cart",component:CartComponent},
  {path:"",component:HomeComponent},
  {path:"main",component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
