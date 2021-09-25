import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'duration' })
export class DurationPipe implements PipeTransform {
  // Takes in number, returns a string
  transform(value: number): string {
    switch (value) {
      case 1:
        return '30 mins';
      case 2:
        return '1 hour';
      case 3:
        return 'Half a day';
      case 4:
        return 'Full day';
      default:
        return value.toString();
    }
  }
}
