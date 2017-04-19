import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { NotFoundComponent } from './not-found/not-found.component';
import { ChartComponent } from './chart/chart.component';
import { MockHttpModule } from './http/mock-http.module';
import { QueryStringService } from './http/query-string.service';

const USE_MOCK_HTTP = true;

@NgModule({
  imports: [
    CommonModule,
    USE_MOCK_HTTP ? MockHttpModule : HttpModule
  ],
  declarations: [
    NotFoundComponent,
    ChartComponent
  ],
  exports: [
    NotFoundComponent,
    ChartComponent
  ],
  providers: [
    QueryStringService
  ]
})
export class SharedModule { }
