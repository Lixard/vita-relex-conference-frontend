import { Component, OnInit } from '@angular/core';
import {ScheduleService} from '../../../../entities/schedule/services/schedule.service';
import {EventModel} from '../../../../entities/event/models/event.model';

@Component({
  selector: 'app-schedule-page',
  templateUrl: './schedule-page.component.html',
  styleUrls: ['./schedule-page.component.scss']
})
export class SchedulePageComponent implements OnInit {

  events: EventModel[];

  constructor(private schedule: ScheduleService) { }

  ngOnInit(): void {
    // @ts-ignore
    this.schedule.getSchedule().subscribe(result => this.events = result);
    console.log(this.events);
  }

}
