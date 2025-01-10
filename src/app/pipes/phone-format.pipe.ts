import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {
  transform(phoneNumber: string): string {

    const formattedPhone: string = phoneNumber.replace(
        /(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/,
        '+$1 ($2) $3-$4-$5'
    );

    return formattedPhone;
  }
}
