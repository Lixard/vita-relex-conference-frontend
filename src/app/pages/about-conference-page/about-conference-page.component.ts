import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConferenceModel} from '../../models/conference.model';
import {EventModel} from '../../models/event.model';

@Component({
  selector: 'app-about-conference-page',
  templateUrl: './about-conference-page.component.html',
  styleUrls: ['./about-conference-page.component.scss']
})
export class AboutConferencePageComponent implements OnInit {

  conference: ConferenceModel;

  events: EventModel[];

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit(): void {
    const conferenceId = this.route.snapshot.paramMap.get('conference');
    this.httpClient.get<ConferenceModel>(`http://localhost:8080/conferences/${conferenceId}`).subscribe(conference => {
      this.conference = conference;
    });
    this.httpClient.get<EventModel[]>(`http://localhost:8080/conferences/${conferenceId}/events`).subscribe(events => {
      this.events = events;
    });

  }

}
