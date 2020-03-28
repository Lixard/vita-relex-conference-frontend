import { Component, Input, OnInit } from '@angular/core';
import {EventCreateModel, EventModel, EventType} from '../../models/event.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EventDetailsModel} from '../../models/event-details.model';
import {HttpClient} from '@angular/common/http';

class EventCreateForm {
  eventName: string;
  eventType: EventType;
  htmlDescription: string;
  location: string;
  timeStart: string;
  timeEnd: string;
}

@Component({
  selector: 'app-create-new-event',
  templateUrl: './create-new-event.component.html',
  styleUrls: ['./create-new-event.component.scss']
})
export class CreateNewEventComponent implements OnInit {

  @Input()
  conferenceId: number;

  form: FormGroup;

  event: EventCreateModel;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      eventName: this.formBuilder.control(undefined),
      eventType: this.formBuilder.control(EventType.LECTURE),
      htmlDescription:  this.formBuilder.control(undefined),
      location:  this.formBuilder.control(undefined),
      timeStart:  this.formBuilder.control(undefined),
      timeEnd:  this.formBuilder.control(undefined),
      });
  }

  createNewEvent(value: EventCreateForm) {
    this.event = {
      eventName: value.eventName,
      eventType: value.eventType,
      conferenceId: this.conferenceId,
      details:   {
        htmlDescription: value.htmlDescription,
        location: value.location,
        timeStart: value.timeStart,
        timeEnd: value.timeEnd,
        createdBy: 1
        // TO DO: insert user id when we add auth
      }};
    console.log(this.event);
   // this.http.post('http://localhost:8080/events', this.event);
  }
}
