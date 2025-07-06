import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'statusClass' })
export class StatusClassPipe implements PipeTransform {
  transform(value: string): string {
    return value.toLowerCase().replace(/\s+/g, '-');
  }
}