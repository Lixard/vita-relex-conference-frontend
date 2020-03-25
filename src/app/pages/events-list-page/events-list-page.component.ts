import { Component, OnInit } from '@angular/core';
import {Event} from './Event';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-events',
  templateUrl: './events-list-page.component.html',
  styleUrls: ['./events-list-page.component.scss']
})
export class EventsListPageComponent implements OnInit {

  events: Event[];
  panelOpenState: boolean;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<Event[]>('http://localhost:8080/events')
      .subscribe(result => {
        this.events = result;
      });
  }

  addInSchedule() {
    console.log('Added!');
  }
}
