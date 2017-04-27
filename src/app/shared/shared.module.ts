import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { ChartsModule } from 'ng2-charts/ng2-charts';

import { NotFoundComponent } from './not-found/not-found.component';
import { ChartComponent } from './chart/chart.component';
import { MockHttpModule } from './http/mock-http.module';
import { QueryStringService } from './http/query-string.service';
import { DateRangePickerComponent } from './date-range-picker/date-range-picker.component';
import { ChartConfigService } from './chart/chart-config.service';
import { TableComponent } from './table/table.component';
import { PopupComponent } from './popup/popup.component';
import { MassConverterPipe } from './pipes/mass-converter.pipe';

const USE_MOCK_HTTP = true;

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    USE_MOCK_HTTP ? MockHttpModule : HttpModule,
    ChartsModule
  ],
  declarations: [
    NotFoundComponent,
    ChartComponent,
    DateRangePickerComponent,
    TableComponent,
    PopupComponent,
    MassConverterPipe,
  ],
  exports: [
    NotFoundComponent,
    ChartComponent,
    DateRangePickerComponent,
    TableComponent,
    MassConverterPipe
  ],
  providers: [
    QueryStringService,
    ChartConfigService,
    MassConverterPipe
  ]
})
export class SharedModule { }
