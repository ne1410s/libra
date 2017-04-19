import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MassRecordService } from './mass-record.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    MassRecordService
  ]
})
export class MassModule { }
