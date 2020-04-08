import { Component, OnInit } from '@angular/core';
import {EventModel} from '../../../../entities/event/models/event.model';
import {EventService} from '../../../../entities/event/services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events-list-page.component.html',
  styleUrls: ['./events-list-page.component.scss']
})
export class EventsListPageComponent implements OnInit {

  events: EventModel[];
  panelOpenState: boolean;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getEvents()
      .subscribe(result => {
        // У меня сгорело. Работает не так как должно
        // @ts-ignore
        this.events = result;
      });
  }
}
