import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { Observable } from 'rxjs';
import { UserLogin } from './userlogin';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }
  checkUserDetails(login:UserLogin):Observable<any>{
    return this.http.post("http://localhost:9090/api/user/login",login,
    {responseType:'text'});
  }

  // loginAccountCreate(login:Login):Observable<any>{
  //   return this.http.post("http://localhost:9090/api/user/signUp",login,
  //   {responseType:'text'});
  // }
}
