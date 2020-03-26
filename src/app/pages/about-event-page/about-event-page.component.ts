import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {EventModel} from '../../models/event.model';

@Component({
  selector: 'app-about-event-page',
  templateUrl: './about-event-page.component.html',
  styleUrls: ['./about-event-page.component.scss']
})
export class AboutEventPageComponent implements OnInit {
  event: EventModel;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit(): void {
    const eventId = this.route.snapshot.paramMap.get('event');
    this.httpClient.get<EventModel>(`http://localhost:8080/events/${eventId}`).subscribe(event => {
      this.event = event;
    });

  }
}
