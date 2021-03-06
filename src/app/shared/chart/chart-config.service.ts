import { Injectable } from '@angular/core';

import { DateCrudService, Period } from 'app/shared/model/date-crud-service.service';

@Injectable()
export class ChartConfigService {

  private baseOptions: any = {
    maintainAspectRatio: true,
    title: {
      display: true,
      fontFamily: `'Raleway', 'sans-serif'`,
      fontSize: 20,
      fontColor: '#f5f5f5'
    },
    legend: {
      display: false,
    },
    tooltips: {
      callbacks: {
        title: item => `${new Date(item[0].xLabel).toDateString()}`,
        label: item => `Mass: ${item.yLabel} kg`
      }
    },
    scales: {
      xAxes: [{
        type: 'time',
        ticks: {
          fontFamily: `'Raleway', 'sans-serif'`,
          fontSize: 16,
          fontColor: '#f5f5f5'
        },
        time: {
          displayFormats: {
            day: 'ddd DD',
            week: 'DD MMM',
            month: 'MMM',
            year: 'YYYY',
          }
        },
      }],
      yAxes: [{
        ticks: {
          fontFamily: `'Raleway', 'sans-serif'`,
          fontSize: 16,
          fontColor: '#f5f5f5',
          min: 86,
          max: 104,
        }
      }]
    }
  };

  getOptions(title: string, period: Period, offset: number, yMin: number, yMax: number): any {

    let timeUnit: string;
    switch (period) {
      case Period.Week:
        timeUnit = 'day';
        break;
      case Period.Month:
        timeUnit = 'week';
        break;
      case Period.Year:
        timeUnit = 'month';
        break;
    }

    const retVal = Object.assign({}, this.baseOptions);
    const dates = DateCrudService.getDates(period, offset);
    retVal.title.text = title;
    retVal.scales.xAxes[0].time.min = dates[0];
    retVal.scales.xAxes[0].time.max = dates[1];
    retVal.scales.xAxes[0].time.unit = timeUnit;
    retVal.scales.yAxes[0].ticks.min = yMin;
    retVal.scales.yAxes[0].ticks.max = yMax;

    return retVal;
  }
}
