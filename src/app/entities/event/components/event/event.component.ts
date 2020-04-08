import {Component, Input, OnInit} from '@angular/core';
import {EventModel} from '../../models/event.model';
import {ScheduleService} from '../../../schedule/services/schedule.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  @Input()
  event: EventModel;
  changeEventVisible = false;

  constructor(private schedule: ScheduleService) { }

  ngOnInit(): void {
  }

  showChangeEvent() {
    this.changeEventVisible = true;
  }

  hideChangeEvent() {
    this.changeEventVisible = false;
  }

  addInSchedule() {
    this.schedule.add(this.event.eventId).subscribe();
  }

  removeFromSchedule() {
    this.schedule.remove(this.event.eventId).subscribe();
  }

  scheduled(): boolean {
    // if (this.event !== undefined) {
    //   return this.schedule.scheduled(this.event);
    // }
    return false;
  }
}
