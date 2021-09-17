import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Citem } from './cart';

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
