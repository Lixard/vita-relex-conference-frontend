import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConferenceCreateForm, ConferenceCreateModel, ConferenceModel} from '../../models/conference.model';
import {ConferenceService} from '../../services/conference.service';
import * as moment from 'moment';

@Component({
  selector: 'app-conference-editor',
  templateUrl: './conference-editor.component.html',
  styleUrls: ['./conference-editor.component.scss']
})
export class ConferenceEditorComponent implements OnInit {

  form: FormGroup;

  @Input()
  conference: ConferenceModel;

  @Output()
  endChanging = new EventEmitter<ConferenceCreateModel>();

  changedConference: ConferenceCreateModel;

  constructor(private formBuilder: FormBuilder, private conferenceService: ConferenceService) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    if (this.conference === undefined) {
      this.form = this.formBuilder.group({
        conferenceName: this.formBuilder.control(undefined, [Validators.max(50), Validators.required]),
        htmlDescription:  this.formBuilder.control(undefined, [Validators.required]),
        location:  this.formBuilder.control(undefined, [Validators.max(50), Validators.required]),
        dateStart:  this.formBuilder.control(undefined, [ Validators.required]),
        dateEnd:  this.formBuilder.control(undefined, [ Validators.required]),
      });
    } else {
      this.form = this.formBuilder.group({
        conferenceName: this.formBuilder.control(this.conference.conferenceName, [Validators.max(50), Validators.required]),
        htmlDescription: this.formBuilder.control(this.conference.details.htmlDescription, [Validators.required]),
        location: this.formBuilder.control(this.conference.details.location, [Validators.max(50), Validators.required]),
        dateStart: this.formBuilder.control(moment(this.conference.details.dateStart).toDate(), [Validators.required]),
        dateEnd: this.formBuilder.control(moment(this.conference.details.dateEnd).toDate(), [Validators.required]),
      });
    }
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
    this.endChanging.emit(this.changedConference);
  }
}
