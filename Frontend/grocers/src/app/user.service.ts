import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }
  checkUserDetails(user:User):Observable<any>{
    return this.http.post("http://localhost:9090/api/user/userlogin",user,
    {responseType:'text'});
  }

  createUserAccount(user:User):Observable<any>{
    return this.http.post("http://localhost:9090/api/user/userregister",user,
    {responseType:'text'});
  }

  getUserDetails(user:User):Observable<any>{
    return this.http.get("http://localhost:9090/api/user/getUser",user
    );
  }

  updateUserDetails(user:User):Observable<any>{
    return this.http.put("http://localhost:9090/api/user/updateUser",user,
    {responseType:'text'});
  }
  // loginAccountCreate(login:Login):Observable<any>{
  //   return this.http.post("http://localhost:9090/api/user/signUp",login,
  //   {responseType:'text'});
  // }
}
