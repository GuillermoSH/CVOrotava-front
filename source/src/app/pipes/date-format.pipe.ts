import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  transform(sqlDateFormat: string): string {
    return sqlDateFormat.split("-")[2] + "/" + sqlDateFormat.split("-")[1] + "/" + sqlDateFormat.split("-")[0];
  }
}
