import { Component, OnInit } from '@angular/core';
import {EventModel} from '../../models/event.model';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {ConferenceService} from '../../services/conference.service';

@Component({
  selector: 'app-events-list-of-conference-page',
  templateUrl: './events-list-of-conference-page.component.html',
  styleUrls: ['./events-list-of-conference-page.component.scss']
})
export class EventsListOfConferencePageComponent implements OnInit {

  events: EventModel[];

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const conferenceId = this.route.snapshot.paramMap.get('conference');
    this.httpClient.get<EventModel[]>(`http://localhost:8080/conferences/${conferenceId}/events`).subscribe(result => {
      this.events = result;
    });
  }

}
