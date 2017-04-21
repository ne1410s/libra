import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { MassRecord } from '../mass-record';
import { MassRecordService } from '../mass-record.service';

@Component({
  selector: 'app-mass-record-detail',
  templateUrl: './mass-record-detail.component.html',
  styleUrls: ['./mass-record-detail.component.css']
})
export class MassRecordDetailComponent implements OnInit {

  massRecord: Observable<MassRecord>;

  constructor(
    private route: ActivatedRoute,
    private massRecordService: MassRecordService) { }

  ngOnInit() {
    this.massRecord = this.route.params
      .switchMap(params => this.massRecordService.get(+params['id']));
  }
}
