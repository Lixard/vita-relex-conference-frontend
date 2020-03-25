import { Component, OnInit } from '@angular/core';
import {Conference} from '../conferences-list-page/Conference';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Event} from '../events-list-page/Event';

@Component({
  selector: 'app-about-event-page',
  templateUrl: './about-event-page.component.html',
  styleUrls: ['./about-event-page.component.scss']
})
export class AboutEventPageComponent implements OnInit {
  event: Event;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit(): void {
    const eventId = this.route.snapshot.paramMap.get('event');
    this.httpClient.get<Event>(`http://localhost:8080/events/${eventId}`).subscribe(event => {
      this.event = event;
    });

  }
}
