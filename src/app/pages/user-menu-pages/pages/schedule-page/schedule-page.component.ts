import { Component, OnInit } from '@angular/core';
import {ScheduleService} from '../../../../entities/schedule/services/schedule.service';
import {EventModel} from '../../../../entities/event/models/event.model';

@Component({
  selector: 'app-schedule-page',
  templateUrl: './schedule-page.component.html',
  styleUrls: ['./schedule-page.component.scss']
})
export class SchedulePageComponent implements OnInit {

  readonly events$ = this.schedule.schedule$;

  constructor(private schedule: ScheduleService) { }

  ngOnInit(): void {
    this.schedule.refreshSchedule();
  }

}
