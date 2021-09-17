import { Injectable } from '@angular/core';

import { Citem } from './cart';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  items:Array<Citem>=[];

  setCartArray(cart:Array<Citem>): void {
    this.items=cart;
  }

  getCartArray(): Array<Citem>{
    return this.items;
  }
}
