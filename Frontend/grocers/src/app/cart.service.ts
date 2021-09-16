import { Injectable } from '@angular/core';
import { Citem } from './Cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  items:Array<Citem>=[];

  setEmpArray(items:Array<Citem>): void {
    this.items=items;
  }

  getEmpArray(): Array<Citem>{
    return this.items;
  }
}
