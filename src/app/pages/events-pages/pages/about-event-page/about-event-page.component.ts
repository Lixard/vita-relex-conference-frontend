import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventCreateModel, EventModel} from '../../../../entities/event/models/event.model';
import {EventService} from '../../../../entities/event/services/event.service';

@Component({
  selector: 'app-about-event-page',
  templateUrl: './about-event-page.component.html',
  styleUrls: ['./about-event-page.component.scss']
})
export class AboutEventPageComponent implements OnInit {
  event: EventModel;

  constructor(private route: ActivatedRoute, private eventService: EventService) { }

  ngOnInit(): void {
    const eventId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.eventService.getEvent(eventId)
      .subscribe(event => {
      this.event = event;
    });

  }
}
