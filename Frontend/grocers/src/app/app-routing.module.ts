import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmpMainComponent} from './employee/empmain/empmain.component';
const routes: Routes = [
  {path:"empmain",component:EmpMainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
