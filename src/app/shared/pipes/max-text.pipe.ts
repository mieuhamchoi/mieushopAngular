import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxText'
})
export class MaxTextPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.substring(0, 20) + ' ...';
  }

}
