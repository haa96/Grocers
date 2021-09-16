import { Injectable } from '@angular/core';
import { Cart } from './cart';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  items:Array<Cart>=[];

  setCartArray(cart:Array<Cart>): void {
    this.items=cart;
  }

  getCartArray(): Array<Cart>{
    return this.items;
  }
}
