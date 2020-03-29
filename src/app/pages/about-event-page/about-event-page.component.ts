import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {EventCreateModel, EventModel} from '../../models/event.model';
import {EventService} from '../../services/event.service';

@Component({
  selector: 'app-about-event-page',
  templateUrl: './about-event-page.component.html',
  styleUrls: ['./about-event-page.component.scss']
})
export class AboutEventPageComponent implements OnInit {
  event: EventModel;
  changeEventVisible = false;

  constructor(private route: ActivatedRoute, private eventService: EventService) { }

  ngOnInit(): void {
    const eventId = parseInt(this.route.snapshot.paramMap.get('event'), 10);
    this.eventService.getEvent(eventId)
      .subscribe(event => {
      this.event = event;
    });

  }

  showChangeEvent() {
    this.changeEventVisible = true;
  }

  hideChangeEvent() {
    this.changeEventVisible = false;
  }

  changeEvent($event: EventCreateModel) {
    console.log($event);
    this.hideChangeEvent();
    // this.eventService.change(this.event.eventId, $event);
  }
}
