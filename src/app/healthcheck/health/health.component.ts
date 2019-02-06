import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HealthService } from './health.service';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { UrlService } from './url.service';
@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit {

  path: string = '';
  env: string = '';

  http: Http;
  status: string = '';
  response: string;
  headers: string[];
  map: Map<string, string> = new Map();

  constructor(private healthService: HealthService, private urlService: UrlService) {
   
      setInterval(() => {
        if(this.env != ''){
          this.getStatus(this.env);
        }
      }, 10000);


  }
  /*
  */
  getStatus(env: string) {
    this.env = env;
    this.map = this.urlService.getEnvMap(env);


    this.map.forEach((value: string, key: string) => {
      console.log(key, value);

      this.healthService.getStatus(key).subscribe(

        (data: IResponse) => {
          console.log('Response data : ' + data);
          console.log('Response Headers : ' + data.httpErrorResponse.headers);
        }, // success path
        (error) => {
          console.log(of(this.handleError(error)));
          this.response = this.handleError(error);
          this.map.set(key, this.response);
          return this.response;
        }
      );

    });

  }


  ngOnInit() {

  }


  private handleError(error: HttpErrorResponse): string {
    if (error.status == 200) {
      return '' + error.status;
    }
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);

    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(

        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return 'Something bad happened; please try again later.';
  };
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
//https://any-api.com/nba_com/nba_com/docs/_allstarballotpredictor/GET
//chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security

export interface IResponse {
  httpErrorResponse: HttpErrorResponse;
  headers: HttpHeaders;
}
