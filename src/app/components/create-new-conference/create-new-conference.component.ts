import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EventCreateModel, EventType} from '../../models/event.model';
import {HttpClient} from '@angular/common/http';
import {ConferenceCreateForm, ConferenceCreateModel, ConferenceModel} from '../../models/conference.model';
import {Timestamp} from 'rxjs/internal-compatibility';
import {ConferenceService} from '../../services/conference.service';


@Component({
  selector: 'app-create-new-conference',
  templateUrl: './create-new-conference.component.html',
  styleUrls: ['./create-new-conference.component.scss']
})
export class CreateNewConferenceComponent implements OnInit {

  @Output()
  endCreating = new EventEmitter<void>();

  form: FormGroup;

  conference: ConferenceCreateModel;

  constructor(private formBuilder: FormBuilder, private conferenceService: ConferenceService) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      conferenceName: this.formBuilder.control(undefined , [Validators.max(50), Validators.required]),
      htmlDescription:  this.formBuilder.control(undefined, [Validators.required]),
      location:  this.formBuilder.control(undefined, [Validators.max(50), Validators.required]),
      dateStart:  this.formBuilder.control(undefined, [ Validators.required]),
      dateEnd:  this.formBuilder.control(undefined, [ Validators.required]),
    });
  }

  createNewConference(value: ConferenceCreateForm) {
    this.conference = {
      conferenceName: value.conferenceName,
      owner: 1,
      // TO DO insert user id
      details:   {
        htmlDescription: value.htmlDescription,
        location: value.location,
        dateStart: value.dateStart,
        dateEnd: value.dateEnd,
        createdAt: Date.now().toString()
      }};
    console.log(this.conference);
    this.endCreating.emit();
    // this.conferenceService.create(this.conference);
  }
}
