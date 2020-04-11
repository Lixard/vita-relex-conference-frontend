import { Component, OnInit } from '@angular/core';
import {EventModel} from '../../../../entities/event/models/event.model';
import {EventService} from '../../../../entities/event/services/event.service';
import {ScheduleService} from '../../../../entities/schedule/services/schedule.service';

@Component({
  selector: 'app-events',
  templateUrl: './events-list-page.component.html',
  styleUrls: ['./events-list-page.component.scss']
})
export class EventsListPageComponent implements OnInit {

  readonly events$ = this.eventService.events$;

  constructor(private eventService: EventService,
              private schedule: ScheduleService) { }

  ngOnInit(): void {
    this.schedule.refreshSchedule();
    this.eventService.refreshEvents();
  }
}
