import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber',
  standalone:true
})
export class PhoneNumberPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const cleanedValue = value.replace(/\D/g, '');
    const reversedValue = cleanedValue.split('').reverse().join('');
    const formattedValue = reversedValue.replace(/(\d{4})/g, '$1 ').trim();

    return '+' + formattedValue.split('').reverse().join('');
  }

}
