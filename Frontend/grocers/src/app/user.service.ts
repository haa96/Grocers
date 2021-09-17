import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }
  //check User Details
  checkUserDetails(user: User): Observable<any> {
    return this.http.post("http://localhost:9090/api/user/userlogin", user,
      { responseType: 'text' });
  }
  //create User Account
  createUserAccount(user: User): Observable<any> {
    return this.http.post("http://localhost:9090/api/user/userregister", user,
      { responseType: 'text' });
  }
  //get User Details
  getUserDetails(user: User): Observable<any> {
    return this.http.get("http://localhost:9090/api/user/getUser", user
    );
  }
  //update User Details
  updateUserDetails(user: User): Observable<any> {
    return this.http.put("http://localhost:9090/api/user/updateUser", user,
      { responseType: 'text' });
  }
  //userUnlock
  userUnlock(user: User): Observable<any> {
    return this.http.post("http://localhost:9090/api/user/unlock", user,
      { responseType: 'text' });
  }

}
