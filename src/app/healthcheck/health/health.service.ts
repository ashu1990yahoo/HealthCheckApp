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
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json')
    headers.append('Access-Control-Allow-Headers', 'Content-Type')
    headers.append('Access-Control-Allow-Methods', 'GET')
    headers.append('Access-Control-Allow-Origin', '*');

    return this.http.get(path,{headers});

  }

}

