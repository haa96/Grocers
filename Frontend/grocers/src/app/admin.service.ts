import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Admin} from './admin'
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AdminService {


  constructor(public http:HttpClient) { }

  checkLoginDetails(admin:Admin):Observable<any>{
    return this.http.post("http://localhost:9090/api/admin/adminlogin",admin,
    {responseType:'text'});
  }

  addproductDetails(admin:Admin):Observable<any>{
    return this.http.post("http://localhost:9090/api/product/storeProduct",admin,
    {responseType:'text'});
  }
  deleteproductDetails(admin:Admin):Observable<any>{
    return this.http.delete("http://localhost:9090/api/product/deleteItem/"+admin);
  }
  getproductDetails():Observable<any>{
    return this.http.get("http://localhost:9090/api/product/getProducts/");
  }
  updateproductDetails(admin:Admin):Observable<any>{
    return this.http.put("http://localhost:9090/api/product/updateProduct",admin,
    {responseType:'text'});
  }
}
