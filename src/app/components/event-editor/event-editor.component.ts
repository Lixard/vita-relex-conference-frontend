import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EventCreateForm, EventCreateModel, EventModel} from '../../models/event.model';
import {EventService} from '../../services/event.service';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss']
})
export class EventEditorComponent implements OnInit {

  form: FormGroup;

  @Input()
  event: EventModel;
  @Input()
  conferenceId: number;

  @Output()
  endChanging = new EventEmitter<EventCreateModel>();

  changedEvent: EventCreateModel;

  constructor(private formBuilder: FormBuilder, private eventService: EventService) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    if (this.event === undefined) {
      this.form = this.formBuilder.group({
        eventName: this.formBuilder.control(undefined , [Validators.max(50), Validators.required]),
        eventType: this.formBuilder.control(undefined, [Validators.required]),
        htmlDescription:  this.formBuilder.control(undefined, [Validators.required]),
        location:  this.formBuilder.control(undefined, [Validators.max(50), Validators.required]),
        timeStart:  this.formBuilder.control(undefined, [ Validators.required]),
        timeEnd:  this.formBuilder.control(undefined, [ Validators.required]),
      });
    } else {
      this.form = this.formBuilder.group({
      eventName: this.formBuilder.control(this.event.eventName , [Validators.max(50), Validators.required]),
      eventType: this.formBuilder.control(this.event.eventType, [Validators.required]),
      htmlDescription:  this.formBuilder.control(this.event.details.htmlDescription, [Validators.required]),
      location:  this.formBuilder.control(this.event.details.location, [Validators.max(50), Validators.required]),
      timeStart:  this.formBuilder.control(this.event.details.timeStart, [ Validators.required]),
      timeEnd:  this.formBuilder.control(this.event.details.timeEnd, [ Validators.required]),
    });
    }
  }

  changeEvent(value: EventCreateForm) {
    this.changedEvent = {
      eventName: value.eventName,
      eventType: value.eventType,
      conferenceId: this.conferenceId,
      details:   {
        htmlDescription: value.htmlDescription,
        location: value.location,
        timeStart: value.timeStart,
        timeEnd: value.timeEnd,
        createdBy: 1
        // TODO: insert user id when we add auth
      }};
    this.endChanging.emit(this.changedEvent);
  }
}
