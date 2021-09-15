import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Employee} from './employee'
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { }

  addEmployeeDetails(employee:Employee):Observable<any>{
    return this.http.post("http://localhost:9090/api/employee/storeEmployee",employee,
    {responseType:'text'});
  }
  deleteEmployeeDetails(employee:Employee):Observable<any>{
    return this.http.delete("http://localhost:9090/api/employee/deleteEmployee/"+employee);
  }
}
