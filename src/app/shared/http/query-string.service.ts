import { Injectable } from '@angular/core';

@Injectable()
export class QueryStringService {

  public makeQuery(...params: [string, any][]): QSQuery {
    return new QSQuery(params.map(p => new QSParam(p[0], p[1])));
  }
}

export class QSQuery {

  constructor(
    public params: QSParam[],
    public pageStart?: number,
    public pageSize?: number) {}

  toString(): string {
    if (this.pageSize && this.pageStart) {
      this.appendTuple(['pageSize', this.pageSize]);
      this.appendTuple(['pageStart', this.pageStart]);
    }
    return '?' + this.params.join('&');
  }

  append(param: QSParam): void {
    this.params.push(param);
  }

  appendTuple(param: [string, any]): void {
    this.params.push(new QSParam(param[0], param[1]));
  }
}

export class QSParam {

  protected get expression(): string {
    return this.value;
  };

  constructor(
      public key: string,
      public value?: any) {}

  toString(): string {
    return this.key + '=' + this.expression;
  }
}

export class QSRangeParam extends QSParam {

  protected get expression(): string {
    const expObj: any = {};
    if (this.lt) { expObj.lt = this.lt; }
    if (this.gt) { expObj.gt = this.gt; }
    return JSON.stringify(expObj);
  }

  constructor(
      key: string,
      public lt?: number,
      public gt?: number) {

    super(key);
  }
}

