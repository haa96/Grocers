import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Admin} from './admin'
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public http:HttpClient) { }

  addproductDetails(admin:Admin):Observable<any>{
    return this.http.post("http://localhost:9090/api/product/storeProduct",admin,
    {responseType:'text'});
  }
  deleteproductDetails(admin:Admin):Observable<any>{
    return this.http.delete("http://localhost:9090/api/product/deleteItem/"+admin);
  }
  updateproductDetails(admin:Admin):Observable<any>{
    return this.http.put("http://localhost:9090/api/product/updateProduct",admin,
    {responseType:'text'});
  }
}
