import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Citem } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(public http: HttpClient) { }
  items: Array<Citem> = [];
  prod: Array<Citem> = [];

  setProdArray(prod: Array<Citem>): void {
    this.prod = prod;
  }

  getProdArray(): Array<Citem> {
    return this.prod;
  }
  setEmpArray(items: Array<Citem>): void {
    this.items = items;
  }

  getEmpArray(): Array<Citem> {
    return this.items;
  }
  getOrders(): Observable<any> {
    return this.http.get("http://localhost:9090/api/purchase/getAllpurchaset/"
    );
  }

  storedpurchaset(cart: Citem): Observable<any> {
    return this.http.post("http://localhost:9090/api/purchase/storedpurchaset", cart,
      { responseType: 'text' });
  }
}
