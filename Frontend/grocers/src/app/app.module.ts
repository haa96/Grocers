import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EmployeeComponent,
    AdminComponent,
    RegisterComponent
  ],
 
  imports: [
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
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
