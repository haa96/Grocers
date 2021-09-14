import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent} from'./cart/cart.component';
import { HomeComponent} from'./home/home.component';
import { AdminpanelComponent} from'./admin/adminpanel/adminpanel.component';
import { ProfileComponent } from './user/profile/profile.component';
import { MainComponent } from './user/main/main.component';
import { ReportComponent } from './admin/report/report.component';
const routes: Routes = [
  {path:"AdminPan",component:AdminpanelComponent},
  {path:"report",component:ReportComponent},
  {path:"profile",component:ProfileComponent},
  {path:"main",component:MainComponent},
  {path:"cart",component:CartComponent},
  {path:"",component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
