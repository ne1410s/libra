import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mass'
})
export class MassConverterPipe implements PipeTransform {

  transform(value: number, to: string, dp: number = 0): string {
    switch (to) {
      case 'kg':
        return value.toFixed(dp) + ' kg';
      case 'lb':
        return (value * 2.20462262).toFixed(dp) + ' lbs';
      case 'st':
        const lbs = value * 2.20462262;
        return Math.floor(lbs / 14) + ' st ' + (lbs % 14).toFixed(dp) + ' lbs';
    }
  }
}
