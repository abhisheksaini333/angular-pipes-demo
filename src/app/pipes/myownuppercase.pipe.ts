import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myownuppercase'
})
export class MyownuppercasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    
    if (typeof value == 'string' ) {
      return value.toUpperCase();
    } else {
      return value;
    }
  }

}
