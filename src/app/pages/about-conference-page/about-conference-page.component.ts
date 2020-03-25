import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Conference} from '../conferences-list-page/Conference';

@Component({
  selector: 'app-about-conference-page',
  templateUrl: './about-conference-page.component.html',
  styleUrls: ['./about-conference-page.component.scss']
})
export class AboutConferencePageComponent implements OnInit {

  conference: Conference;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit(): void {
    const conferenceId = this.route.snapshot.paramMap.get('conference');
    this.httpClient.get<Conference>(`http://localhost:8080/conferences/${conferenceId}`).subscribe(conference => {
      this.conference = conference;
    });

  }

}
