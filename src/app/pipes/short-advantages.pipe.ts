import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortAdvantages'
})
export class ShortAdvantagesPipe implements PipeTransform {


  transform(value: string, limit: number = 95): string {
    if (!value) {
      return '';
    }

    if (value.length <= limit) {
      return value;
    }

    return value.substring(0, limit) + '...';
  }

}
