import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { stringify } from "querystring";


@Injectable({
  providedIn: 'root'
})
export class HealthService {

  url: string;
  constructor(private http: HttpClient) { }

  response: Map<string, any>;

  getStatus(path: string): Observable<any> {
    return this.http.get(path);

  }

}

