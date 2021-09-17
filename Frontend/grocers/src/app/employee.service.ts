import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http: HttpClient) { }
  //add Employee
  addEmployeeDetails(employee: Employee): Observable<any> {
    return this.http.post("http://localhost:9090/api/employee/storeEmployee", employee,
      { responseType: 'text' });
  }
  // delete Employee
  deleteEmployeeDetails(employee: Employee): Observable<any> {
    return this.http.delete("http://localhost:9090/api/employee/deleteEmployee/" + employee);
  }
  //perform Login
  performLogin(employee: Employee): Observable<any> {
    let login_url = "http://localhost:9090/api/employee/login";
    return this.http.post(login_url, employee, { responseType: "text" });
  }
  //update Employee
  updateEmployeeDetails(employee: Employee): Observable<any> {
    return this.http.put("http://localhost:9090/api/employee/updateEmployee", employee,
      { responseType: 'text' });
  }
  //  send Product Request
  sendProductRequest(employee: Employee): Observable<any> {
    return this.http.post("http://localhost:9090/api/sendProductRequest/sendProductRequest", employee,
      { responseType: 'text' });
  }
  //get Ticket Details
  getTicketDetails(): Observable<any> {
    return this.http.get("http://localhost:9090/api/ticket/getTickets/");
  }
  // update Order Status Details
  updateOrderStatusDetails(employee: Employee): Observable<any> {
    return this.http.post("http://localhost:9090/api/purchase/orderStatus", employee,
      { responseType: 'text' });
  }
  //get Order Details
  getOrderDetails(): Observable<any> {
    return this.http.get("http://localhost:9090/api/purchase/getOrder/");
  }
}


