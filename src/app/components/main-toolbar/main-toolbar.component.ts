import { Component, OnInit } from '@angular/core';
import {ConferenceCreateForm, ConferenceCreateModel} from '../../models/conference.model';
import {ConferenceService} from '../../services/conference.service';
import {ConferenceDetailsModel} from '../../models/conference-details.model';

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.scss']
})
export class MainToolbarComponent implements OnInit {

  createConferenceVision = false;

  constructor(private conferenceService: ConferenceService) { }

  ngOnInit(): void {
  }

  openCreateConference() {
    this.createConferenceVision = true;
  }

  hideCreateConference() {
    this.createConferenceVision = false;
  }

  endCreating($event: ConferenceCreateModel) {
    console.log($event);
    this.hideCreateConference();
    // this.conferenceService.create($event);
  }
}
