import { Injectable } from '@angular/core';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  prod:Array<Cart>=[];

  setProdArray(prod:Array<Cart>): void {
    this.prod=prod;
  }

  getProdArray(): Array<Cart>{
    return this.prod;
  }
}
