import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConferenceCreateForm, ConferenceCreateModel, ConferenceModel} from '../../models/conference.model';
import {ConferenceService} from '../../services/conference.service';
import { MatNativeDateModule } from '@angular/material/core';
import * as moment from 'moment';

@Component({
  selector: 'app-change-conference',
  templateUrl: './change-conference.component.html',
  styleUrls: ['./change-conference.component.scss']
})
export class ChangeConferenceComponent implements OnInit {

  form: FormGroup;

  @Input()
  conference: ConferenceModel;

  @Output()
  endChanging = new EventEmitter<void>();

  changedConference: ConferenceCreateModel;

  constructor(private formBuilder: FormBuilder, private conferenceService: ConferenceService) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      conferenceName: this.formBuilder.control(this.conference.conferenceName , [Validators.max(50), Validators.required]),
      htmlDescription:  this.formBuilder.control(this.conference.details.htmlDescription, [Validators.required]),
      location:  this.formBuilder.control(this.conference.details.location, [Validators.max(50), Validators.required]),
      dateStart:  this.formBuilder.control(moment(this.conference.details.dateStart).toDate(), [ Validators.required]),
      dateEnd:  this.formBuilder.control(moment(this.conference.details.dateEnd).toDate(), [ Validators.required]),
    });
  }

  changeConference(value: ConferenceCreateForm) {
    this.changedConference = {
      ...this.conference,
      conferenceName: value.conferenceName,
      details:   {
        ...this.conference.details,
        htmlDescription: value.htmlDescription,
        location: value.location,
        dateStart: moment(value.dateStart).toISOString(),
        dateEnd: moment(value.dateEnd).toISOString(),
      }};
    console.log(this.changedConference);
    this.endChanging.emit();
    // this.conferenceService.update(this.conference.conferenceId, this.changedConference);
  }

}
