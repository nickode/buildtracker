import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'builds'
})
export class BuildsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
