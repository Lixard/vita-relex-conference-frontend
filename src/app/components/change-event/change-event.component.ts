import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EventCreateForm, EventCreateModel, EventModel, EventType} from '../../models/event.model';
import {HttpClient} from '@angular/common/http';
import {EventService} from '../../services/event.service';

@Component({
  selector: 'app-change-event',
  templateUrl: './change-event.component.html',
  styleUrls: ['./change-event.component.scss']
})
export class ChangeEventComponent implements OnInit {
  form: FormGroup;

  @Input()
  event: EventModel;

  @Output()
  endChanging = new EventEmitter<void>();

  changedEvent: EventCreateModel;

  constructor(private formBuilder: FormBuilder, private eventService: EventService) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      eventName: this.formBuilder.control(this.event.eventName , [Validators.max(50), Validators.required]),
      eventType: this.formBuilder.control(this.event.eventType, [Validators.required]),
      htmlDescription:  this.formBuilder.control(this.event.details.htmlDescription, [Validators.required]),
      location:  this.formBuilder.control(this.event.details.location, [Validators.max(50), Validators.required]),
      timeStart:  this.formBuilder.control(this.event.details.timeStart, [ Validators.required]),
      timeEnd:  this.formBuilder.control(this.event.details.timeEnd, [ Validators.required]),
    });
  }

  changeEvent(value: EventCreateForm) {
    this.changedEvent = {
      ...this.event,
      eventName: value.eventName,
      eventType: value.eventType,
      details:   {
        ...this.event.details,
        htmlDescription: value.htmlDescription,
        location: value.location,
        timeStart: value.timeStart,
        timeEnd: value.timeEnd,
        // TODO: insert user id when we add auth
      }};
    console.log(this.changedEvent);
    this.endChanging.emit();
    // this.eventService.change(this.event.eventId, this.changedEvent);
  }

}
