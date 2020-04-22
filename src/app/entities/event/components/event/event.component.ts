import {Component, Input, OnInit} from '@angular/core';
import {EventCreateModel, EventModel} from '../../models/event.model';
import {ScheduleService} from '../../../schedule/services/schedule.service';
import {Observable} from 'rxjs';
import {EventService} from '../../services/event.service';
import {UserService} from '../../../user/service/user.service';
import {UserModel} from '../../../user/models/user.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  @Input()
  event: EventModel;
  changeEventVisible = false;

  speakers: UserModel[];

  @Input()
  isDashboardMode = false;


  constructor(private schedule: ScheduleService,
              private eventService: EventService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.getEventOrganizers();
  }

  getEventOrganizers() {
    // @ts-ignore
    this.userService.getSpeakersByEventId(this.event.eventId).subscribe(value => this.speakers = value);
  }

  showChangeEvent() {
    this.changeEventVisible = true;
  }

  hideChangeEvent() {
    this.changeEventVisible = false;
  }

  addInSchedule() {
    this.schedule.add(this.event.eventId).subscribe();
    this.schedule.refreshSchedule();
  }

  removeFromSchedule() {
    this.schedule.remove(this.event.eventId).subscribe();
    this.schedule.refreshSchedule();
  }

  scheduled(): Observable<boolean> {
    return this.schedule.scheduled(this.event);
  }

  deleteThisEvent() {
    this.eventService.delete(this.event.eventId).subscribe();
  }

  changeEvent($event: EventCreateModel) {
    this.eventService.change(this.event.eventId, $event).subscribe();
    this.hideChangeEvent();
  }
}
