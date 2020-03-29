import { Component, Input, OnInit } from '@angular/core';
import {EventCreateForm, EventCreateModel, EventModel, EventType} from '../../models/event.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EventDetailsModel} from '../../models/event-details.model';
import {HttpClient} from '@angular/common/http';
import {EventService} from '../../services/event.service';


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

  constructor(private formBuilder: FormBuilder, private eventService: EventService) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      eventName: this.formBuilder.control(undefined , [Validators.max(50), Validators.required]),
      eventType: this.formBuilder.control(EventType.LECTURE, [Validators.required]),
      htmlDescription:  this.formBuilder.control(undefined, [Validators.required]),
      location:  this.formBuilder.control(undefined, [Validators.max(50), Validators.required]),
      timeStart:  this.formBuilder.control(undefined, [ Validators.required]),
      timeEnd:  this.formBuilder.control(undefined, [ Validators.required]),
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
    close();
    // this.eventService.createEvent(this.event);
  }
}
