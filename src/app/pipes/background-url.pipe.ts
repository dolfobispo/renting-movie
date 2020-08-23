import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bgUrl'
})
export class BackgroundUrlPipe implements PipeTransform {

  transform(value: string): string {
    return `url(./assets/images/${value})`;
  }

}