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

  dayReport(): Observable<any> {
    return this.http.get("http://localhost:9090/api/report/daily");
  }
  weekReport(): Observable<any> {
    return this.http.get("http://localhost:9090/api/report/weekly");
  }
  monthReport(): Observable<any> {
    return this.http.get("http://localhost:9090/api/report/monthly");
  }

}
