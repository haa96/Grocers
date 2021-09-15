import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import {ReactiveFormsModule} from '@angular/forms';
import { MatIconModule } from  '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from  '@angular/material/toolbar';
import { MatButtonModule } from  '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { UserComponent } from './user/user.component';
import { EmployeeComponent } from './employee/employee.component';
import { AdminComponent } from './admin/admin.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTreeModule} from '@angular/material/tree';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './user/profile/profile.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MainComponent } from './user/main/main.component';
import { MatCardModule } from '@angular/material/card';
import { AdminpanelComponent } from './admin/adminpanel/adminpanel.component';
import { ReportComponent } from './admin/report/report.component';
import {HttpClientModule} from '@angular/common/http';
import { RaiseticketComponent } from './raiseticket/raiseticket.component'; 









@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EmployeeComponent,
    AdminComponent,
    RegisterComponent,
    CartComponent,
    HomeComponent,
    ProfileComponent,
    MainComponent,
    AdminpanelComponent,
    ReportComponent,
    MainComponent,
    RaiseticketComponent,
    ReportComponent
  ],
 
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatGridListModule,
    MatTreeModule,
    MatTabsModule,
    MatCardModule,
    BrowserAnimationsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
