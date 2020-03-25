import { Component, OnInit } from '@angular/core';
import {Event} from '../events-list-page/Event';
import {HttpClient} from '@angular/common/http';
import {Conference} from './Conference';

@Component({
  selector: 'app-conferences-list-page',
  templateUrl: './conferences-list-page.component.html',
  styleUrls: ['./conferences-list-page.component.scss']
})
export class ConferencesListPageComponent implements OnInit {

  conferences: Conference[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<Conference[]>('http://localhost:8080/conferences')
      .subscribe(result => {
        this.conferences = result;
      });
  }
}
