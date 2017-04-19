import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';

import { Record } from './record';

@Injectable()
export abstract class CrudService<T extends Record> {

  protected abstract apiEntityPath: string;
  private apiBase = 'api';
  private headers = new Headers({'Content-Type': 'application/json'});

  public static handleError(error: any): Observable<any> {
    console.error('An error occurred', error); // TODO: Logging Service
    return Observable.throw(error.message || error);
  }

  constructor(protected http: Http) {}

  get(id: number): Observable<T> {
    const url = `${this.apiBase}/${this.apiEntityPath}/${id}`;
    return this.http
        .get(url, { headers: this.headers })
        .map(res => res.json().data as T)
        .catch(CrudService.handleError);
  }

  list(): Observable<T[]> {
    const url = `${this.apiBase}/${this.apiEntityPath}`;
    return this.http
        .get(url, { headers: this.headers })
        .map(res => res.json().data as T[])
        .catch(CrudService.handleError);
  }
}
