import {Component, OnInit} from '@angular/core';
import {ConferenceCreateModel, ConferenceModel} from '../../../../entities/conference/models/conference.model';
import {ConferenceService} from '../../../../entities/conference/services/conference.service';
import {CurrentUserService} from '../../../../core/services/current-user.service';
import {Role} from '../../../../core/models/current-user.model';
import {combineLatest, concat, from, observable, Observable} from 'rxjs';
import {distinct, map} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  conferences: ConferenceModel[];
  createConferenceVisible = false;

  constructor(private conferenceService: ConferenceService,
              private currentUser: CurrentUserService) { }

  ngOnInit(): void {
    this.currentUser.user$.subscribe(result => {
      combineLatest([this.conferenceService.getConferencesByUserId(result.id),
        this.conferenceService.getConferencesWhereUserIsOwner(result.id)])
        .subscribe( ([conferencesWhereUserIsOrganizer,
                       conferencesWhereUserIsOwner]) => {
          this.conferences = Array
            .from(
              // @ts-ignore
              new Set([...conferencesWhereUserIsOrganizer, ...conferencesWhereUserIsOwner]
                .map(conference => conference.conferenceId))
            )
            .map( conferenceId => {
              // @ts-ignore
              return [...conferencesWhereUserIsOrganizer, ...conferencesWhereUserIsOwner]
                .find( conference => conference.conferenceId === conferenceId);
            });
        });
    });
  }

  canCreateConference(): Observable<boolean> {
    return this.currentUser.hasRole(Role.COMPANY_ACCOUNT, Role.ADMIN);
  }

  createConference($event: ConferenceCreateModel) {
    this.conferenceService.create($event).subscribe();
    this.createConferenceVisible = false;
  }

  showCreateConference() {
    this.createConferenceVisible = true;
  }

  hideCreateConference() {
    this.createConferenceVisible = false;
  }
}
