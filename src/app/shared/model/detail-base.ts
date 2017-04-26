import { Input } from '@angular/core';

import { Record } from './record';

export class DetailBase<T extends Record> {
  @Input() detailItem: T;
}
