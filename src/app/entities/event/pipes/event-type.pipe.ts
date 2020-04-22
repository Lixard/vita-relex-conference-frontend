import {Pipe, PipeTransform} from '@angular/core';
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
        return 'Митап';
      case EventType.LECTURE:
        return 'Лекция';
      case EventType.SEMINAR:
        return 'Семинар';
      case EventType.PRODUCT_PRESENTATION:
        return 'Презентация продукта';
      case EventType.ENTERTAINING_EVENT:
        return 'Развлекательное мероприятие';
    }
  }

}
