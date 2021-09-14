import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent} from'./cart/cart.component';
import { HomeComponent} from'./home/home.component';
import { AdminpanelComponent} from'./adminpanel/adminpanel.component';
import { ProfileComponent } from './user/profile/profile.component';
import { MainComponent } from './user/main/main.component';
import { AddProductComponent } from './adminpanel/add-product/add-product.component';
import { DeleteProductComponent } from './adminpanel/delete-product/delete-product.component';
import { UpdateproductComponent } from './adminpanel/updateproduct/updateproduct.component';
import { ViewRequestComponent } from './adminpanel/view-request/view-request.component';


const routes: Routes = [
  {path:"AdminPan",component:AdminpanelComponent},
  {path:"profile",component:ProfileComponent},
  {path:"main",component:MainComponent},
  {path:"cart",component:CartComponent},
  {path:"",component:HomeComponent},
  {path:"addProduct",component:AddProductComponent},
  {path:"deleteProduct",component:DeleteProductComponent},
  {path:"updateProduct",component:UpdateproductComponent},
  {path:"viewRequest",component:ViewRequestComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
