import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConferenceModel} from '../../models/conference.model';
import {EventModel} from '../../models/event.model';
import {ConferenceService} from '../../services/conference.service';

@Component({
  selector: 'app-about-conference-page',
  templateUrl: './about-conference-page.component.html',
  styleUrls: ['./about-conference-page.component.scss']
})
export class AboutConferencePageComponent implements OnInit {

  conference: ConferenceModel;

  events: EventModel[];
  changeConferenceVisible = false;
  createNewEventVisible = false;

  constructor(private route: ActivatedRoute, private conferenceService: ConferenceService) { }

  ngOnInit(): void {
    const conferenceId = parseInt(this.route.snapshot.paramMap.get('conference'), 10);
    this.conferenceService.getConferenceById(conferenceId).subscribe(conference => {
      this.conference = conference;
    });
    this.conferenceService.getEventsByConferenceId(conferenceId).subscribe(events => {
      // @ts-ignore
      this.events = events;
    });

  }

  showCreateNewEventComponent() {
    this.createNewEventVisible = true;
  }

  hideCreateNewEventComponent() {
    this.createNewEventVisible = false;
  }

  showChangeConference() {
    this.changeConferenceVisible = true;
  }

  hideChangeConference() {
    this.changeConferenceVisible = false;
  }
}
