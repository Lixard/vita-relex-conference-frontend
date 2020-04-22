import {Component, Input, OnInit} from '@angular/core';
import {ConferenceModel} from '../../models/conference.model';
import {UserModel} from '../../../user/models/user.model';
import {ConferenceService} from '../../services/conference.service';
import {UserService} from '../../../user/service/user.service';
import {ReplaySubject} from 'rxjs';

@Component({
  selector: 'app-organizers-list',
  templateUrl: './organizers-list.component.html',
  styleUrls: ['./organizers-list.component.scss']
})
export class OrganizersListComponent implements OnInit {

  @Input()
  conference: ConferenceModel;
  readonly organizers$ = new ReplaySubject<UserModel[]>(1);
  readonly users$ = new ReplaySubject<UserModel[]>(1);

  constructor(private conferenceService: ConferenceService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.refreshOrganizers();
    this.refreshUsers();
  }

  private refreshUsers() {
    this.userService.getUsers().subscribe(result => {
      // @ts-ignore
      this.users$.next(result);
    });
  }

  private refreshOrganizers() {
    this.conferenceService.getOrganizers(this.conference.conferenceId).subscribe(result => {
      // @ts-ignore
      this.organizers$.next(result);
    });
  }

  removeOrganizer(userId: number) {
    this.conferenceService.removeOrganizer(this.conference.conferenceId, userId).subscribe();
    this.refreshOrganizers();
    this.refreshUsers();
  }

  addOrganizer(userId: number) {
    this.conferenceService.addOrganizer(this.conference.conferenceId, userId).subscribe();
    this.refreshOrganizers();
    this.refreshUsers();
  }
}
