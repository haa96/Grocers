import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }
  checkLoginDetails(user:User):Observable<any>{
    return this.http.post("http://localhost:9090/api/user/userlogin",user,
    {responseType:'text'});
  }
  // loginAccountCreate(login:Login):Observable<any>{
  //   return this.http.post("http://localhost:9090/api/user/signUp",login,
  //   {responseType:'text'});
  // }
}
