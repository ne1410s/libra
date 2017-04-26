import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Record } from './record';
import { QSQuery } from '../http/query-string.service';

@Injectable()
export abstract class CrudService<T extends Record> {

  private hackedIncrementId = 1000;

  protected abstract apiEntityPath: string;
  protected apiBase = 'api';
  protected headers = new Headers({'Content-Type': 'application/json'});

  public static handleError(error: any): Observable<any> {
    console.error('An error occurred', error); // TODO: Logging Service
    return Observable.throw(error.message || error);
  }

  constructor(protected http: Http) {}

  insert(item: T): Observable<T> {
    const url = `${this.apiBase}/${this.apiEntityPath}`;
    return this.http
        .post(url, JSON.stringify(item), { headers: this.headers })
        .map(res => res.json().data as T)
        .catch(CrudService.handleError);
  }

  get(id: number): Observable<T> {
    const url = `${this.apiBase}/${this.apiEntityPath}/${id}`;
    return this.http
        .get(url, { headers: this.headers })
        .map(res => res.json().data as T)
        .catch(CrudService.handleError);
  }

  update(item: T): Observable<T> {
    const url = `${this.apiBase}/${this.apiEntityPath}/${item.id}`;
    return this.http
        .put(url, JSON.stringify(item), { headers: this.headers })
        .map(() => item)
        .catch(CrudService.handleError);
  }

  delete(id: number): Observable<T> {
    const url = `${this.apiBase}/${this.apiEntityPath}/${id}`;
    return this.http
        .delete(url, { headers: this.headers })
        .map(() => null)
        .catch(CrudService.handleError);
  }

  list(): Observable<T[]> {
    const url = `${this.apiBase}/${this.apiEntityPath}`;
    return this.http
        .get(url, { headers: this.headers })
        .map(res => res.json().data as T[])
        .catch(CrudService.handleError);
  }

  search(params: QSQuery): Observable<T[]> {
    const url = `${this.apiBase}/${this.apiEntityPath}`;
    return this.http
        .get(`${url}${params}`, { headers: this.headers })
        .map(response => response.json().data as T[])
        .catch(CrudService.handleError);
  }

  save(item: T): Observable<T> {
    if (item.id === -1) {
      item.id = ++this.hackedIncrementId;
      return this.insert(item);
    } else {
      return this.update(item);
    }
  }
}
