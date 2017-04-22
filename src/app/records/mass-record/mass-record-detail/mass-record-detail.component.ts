import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

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

  hasErrored: boolean;
  massRecord: MassRecord;

  /**
   *
   *    TODO: Make observables?  EIther way, we need to queue up model change requests to save sensibly
   *    TODO: Fix error logging for not-found mass record id!
   */

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private massRecordService: MassRecordService) { }

  ngOnInit() {
    this.route.params
      .switchMap(params => this.massRecordService.get(+params['id']))
      .catch((err, record) => {
        this.hasErrored = true;
        return record;
      })
      .subscribe(massRecord => {
        this.massRecord = massRecord;
      });
  }

  goBack(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  queueUpdate(): void {
    // Queue up changes with a delay time for most recent change!
    console.log(this.massRecord.kilos, this.massRecord.recorded);
  }
}
