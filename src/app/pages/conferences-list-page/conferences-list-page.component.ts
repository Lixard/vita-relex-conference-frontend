import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConferenceModel} from '../../models/conference.model';
import {ConferenceService} from '../../services/conference.service';

@Component({
  selector: 'app-conferences-list-page',
  templateUrl: './conferences-list-page.component.html',
  styleUrls: ['./conferences-list-page.component.scss']
})
export class ConferencesListPageComponent implements OnInit {

  conferences: ConferenceModel[];

  constructor(private conferenceService: ConferenceService) { }

  ngOnInit(): void {
    this.conferenceService.getConferences()
      .subscribe(result => {
        // @ts-ignore
        this.conferences = result;
      });
  }
}
