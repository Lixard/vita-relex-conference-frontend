import {Component, Input, OnInit} from '@angular/core';
import {ConferenceCreateModel, ConferenceModel} from '../../models/conference.model';
import {ConferenceService} from '../../services/conference.service';
import {EventService} from '../../../event/services/event.service';
import {Observable} from 'rxjs';
import {EventCreateModel, EventModel} from '../../../event/models/event.model';
import {List} from '../../../../core/models/list.model';
import {$e} from 'codelyzer/angular/styles/chars';
import {CurrentUserService} from '../../../../core/services/current-user.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.scss']
})
export class ConferenceComponent implements OnInit {

  @Input()
  conference: ConferenceModel;
  events?: EventModel[];

  @Input()
  isDashboardMode = false;
  changeConferenceVisible = false;
  createEventVisible = false;
  panelOpenState = false;

  constructor(private conferenceService: ConferenceService,
              private eventService: EventService,
              private currentUser: CurrentUserService) { }

  ngOnInit(): void {
    this.getEvents();
  }

  showChangeConference() {
    this.changeConferenceVisible = true;
    this.createEventVisible = false;
  }

  hideChangeConference() {
    this.changeConferenceVisible = false;
  }

  deleteThisConference() {
    this.conferenceService.delete(this.conference.conferenceId).subscribe();
  }

  resurrectThisConference() {
    this.conferenceService.resurrect(this.conference.conferenceId).subscribe();
  }

  showCreateEvent() {
    this.createEventVisible = true;
    this.changeConferenceVisible = false;
  }

  hideCreateEvent() {
    this.createEventVisible = false;
  }

  getEvents() {
    this.conferenceService.getEventsByConferenceId(this.conference.conferenceId).subscribe(events => {
      // @ts-ignore
      this.events = events;
    });
  }

  changeConference($event: ConferenceCreateModel) {
    this.conferenceService.update(this.conference.conferenceId, $event).subscribe();
    this.hideChangeConference();
  }

  createEvent($event: EventCreateModel) {
    this.eventService.createEvent($event).subscribe();
    this.hideCreateEvent();
  }

  canDeleteConference(): boolean {
    return this.currentUser.canDeleteConference(this.conference.owner);
  }
}
