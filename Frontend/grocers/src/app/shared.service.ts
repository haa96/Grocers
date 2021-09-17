import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
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
