import { Pipe, PipeTransform } from '@angular/core';
import {EventType} from '../models/event.model';

@Pipe({
  name: 'eventType'
})
export class EventTypePipe implements PipeTransform {

  transform(value: EventType): string | undefined {
    if (value === undefined) {
      return undefined;
    }
    switch (value) {
      case EventType.MEETUP:
        return 'Meet up';
      case EventType.LECTURE:
        return 'Lecture';
      case EventType.SEMINAR:
        return 'Seminar';
      case EventType.PRODUCT_PRESENTATION:
        return 'Product presentation';
      case EventType.ENTERTAINING_EVENT:
        return 'Entertaining event';
    }
  }

}
