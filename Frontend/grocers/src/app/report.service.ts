import { Injectable } from '@angular/core';
import { Report } from './report'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  constructor(public http: HttpClient) { }
  prod: Array<Report> = [];
  //day Report
  dayReport(): Observable<any> {
    return this.http.get("http://localhost:9090/api/report/daily");
  }
  //day Report
  weekReport(): Observable<any> {
    return this.http.get("http://localhost:9090/api/report/weekly");
  }
  //month Report
  monthReport(): Observable<any> {
    return this.http.get("http://localhost:9090/api/report/monthly");
  }

}
