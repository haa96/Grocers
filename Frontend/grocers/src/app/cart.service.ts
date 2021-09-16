import { Injectable } from '@angular/core';
import { Emp } from './Cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  emps:Array<Emp>=[];

  setEmpArray(emps:Array<Emp>): void {
    this.emps=emps;
  }

  getEmpArray(): Array<Emp>{
    return this.emps;
  }
}
