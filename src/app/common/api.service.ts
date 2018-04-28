import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { AppConfiguration } from '../common/config/app-configuration.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class APIService {
  constructor(
    public config: AppConfiguration,
    public http: Http
  ) { }

  get(url: string): Observable<any> {
    return this.http
      .get(`${this.config.apiURL}/${url}`, this.getRequestOptions())
      .map(this.extractData)
      .catch(this.handleError);
  }

  post(url: string, body: any): Observable<any> {
    return this.http
      .post(`${this.config.apiURL}/${url}`, body, this.getRequestOptions())
      .map(this.extractData)
      .catch(this.handleError);
  }

  private getRequestOptions() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    const innerOptions = new RequestOptions({ headers });
    return innerOptions;
  }

  private extractData(res: Response) {
    return res.json();
  }

  private handleError(error: Response | any) {
    return Observable.throw(error._body);
  }
}
