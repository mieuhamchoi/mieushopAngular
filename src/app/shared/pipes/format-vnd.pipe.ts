import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatVnd'
})
export class FormatVndPipe implements PipeTransform {
   // customer pipe
  transform(value: number, ...args: number[]): string {
      let decimalPlaces = value.toString().length; // Để xác định số chữ số của một số thực
      let formattedNumber = value.toLocaleString('vi-VN', { style: 'decimal', maximumFractionDigits: decimalPlaces });
      return formattedNumber + ' VND';
  }
}
