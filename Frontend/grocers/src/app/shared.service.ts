import { Injectable } from '@angular/core';
import { Emp } from './Emp.model';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  emps:Array<Emp>=[];

  setEmpArray(emps:Array<Emp>): void {
    this.emps=emps;
  }

  getEmpArray(): Array<Emp>{
    return this.emps;
  }
}
