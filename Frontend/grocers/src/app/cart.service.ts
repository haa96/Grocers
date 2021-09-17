import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Citem } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(public http:HttpClient) { }
  items:Array<Citem>=[];

  setEmpArray(items:Array<Citem>): void {
    this.items=items;
  }

  getEmpArray(): Array<Citem>{
    return this.items;
  }
  storedpurchaset(cart:Citem):Observable<any>{
    return this.http.post("http://localhost:9090/api/purchase/storedpurchaset",cart,
    {responseType:'text'});
  }
}
