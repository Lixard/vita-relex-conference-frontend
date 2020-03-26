import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConferenceModel} from '../../models/conference.model';

@Component({
  selector: 'app-conferences-list-page',
  templateUrl: './conferences-list-page.component.html',
  styleUrls: ['./conferences-list-page.component.scss']
})
export class ConferencesListPageComponent implements OnInit {

  conferences: ConferenceModel[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<ConferenceModel[]>('http://localhost:8080/conferences')
      .subscribe(result => {
        this.conferences = result;
      });
  }
}
