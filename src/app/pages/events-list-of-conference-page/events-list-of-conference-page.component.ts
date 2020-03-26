import { Component, OnInit } from '@angular/core';
import {Event} from '../events-list-page/Event';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Conference} from '../conferences-list-page/Conference';

@Component({
  selector: 'app-events-list-of-conference-page',
  templateUrl: './events-list-of-conference-page.component.html',
  styleUrls: ['./events-list-of-conference-page.component.scss']
})
export class EventsListOfConferencePageComponent implements OnInit {

  events: Event[];

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const conferenceId = this.route.snapshot.paramMap.get('conference');
    this.httpClient.get<Event[]>(`http://localhost:8080/conferences/${conferenceId}/events`).subscribe(result => {
      this.events = result;
    });
  }

}
