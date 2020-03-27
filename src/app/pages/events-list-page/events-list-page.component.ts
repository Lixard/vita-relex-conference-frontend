import { Component, OnInit } from '@angular/core';
import {EventModel} from '../../models/event.model';
import {HttpClient} from '@angular/common/http';
import {EventService} from '../../services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events-list-page.component.html',
  styleUrls: ['./events-list-page.component.scss']
})
export class EventsListPageComponent implements OnInit {

  events: EventModel[];
  panelOpenState: boolean;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<EventModel[]>('http://localhost:8080/events')
      .subscribe(result => {
        this.events = result;
      });

  }

  addInSchedule() {
    console.log('Added!');
  }
}
