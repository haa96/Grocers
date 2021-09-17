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
  prod:Array<Citem>=[];

  setProdArray(prod:Array<Citem>): void {
    this.prod=prod;
  }
// Get All product 
  getProdArray(): Array<Citem>{
    return this.prod;
  }
  //add product to the cart
  setEmpArray(items:Array<Citem>): void {
    this.items=items;
  }
  // Get product ftom the cart
  getEmpArray(): Array<Citem>{
    return this.items;
  }
  //Get the order 
  getOrders():Observable<any>{
    return this.http.get("http://localhost:9090/api/purchase/getAllpurchaset/"
    );
  }
//  storedpurchaset in mongodb
  storedpurchaset(cart:Citem):Observable<any>{
    return this.http.post("http://localhost:9090/api/purchase/storedpurchaset",cart,
    {responseType:'text'});
  }
}
