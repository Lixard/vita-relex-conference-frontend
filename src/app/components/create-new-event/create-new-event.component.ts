import { Component, Input, OnInit } from '@angular/core';
import {EventCreateModel, EventModel, EventType} from '../../models/event.model';

@Component({
  selector: 'app-create-new-event',
  templateUrl: './create-new-event.component.html',
  styleUrls: ['./create-new-event.component.scss']
})
export class CreateNewEventComponent implements OnInit {

  @Input()
  conferenceId: number;

  keys = Object.keys;
  eventTypes = EventType;

  event: EventCreateModel;
  constructor() {
    this.event = {
      eventName: undefined,
      eventType: undefined,
      conferenceId: this.conferenceId,
      details: {
        htmlDescription: undefined,
        location: undefined,
        timeStart: undefined,
        timeEnd: undefined,
        createdBy: 2
      }
    };
  }

  ngOnInit(): void {
  }

}
