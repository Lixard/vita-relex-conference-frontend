import {Component, Input, OnInit} from '@angular/core';
import {ConferenceModel} from '../../models/conference.model';
import {UserModel} from '../../../user/models/user.model';
import {ConferenceService} from '../../services/conference.service';
import {UserService} from '../../../user/service/user.service';

@Component({
  selector: 'app-organizers-list',
  templateUrl: './organizers-list.component.html',
  styleUrls: ['./organizers-list.component.scss']
})
export class OrganizersListComponent implements OnInit {

  @Input()
  conference: ConferenceModel;
  organizers: UserModel[];
  users: UserModel[];

  constructor(private conferenceService: ConferenceService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.conferenceService.getOrganizers(this.conference.conferenceId).subscribe( result => {
      // @ts-ignore
      this.organizers = result;
        }
    );
    this.userService.getUsers().subscribe(result => {
      // @ts-ignore
      this.users = result;
    });
  }

  removeOrganizer(userId: number) {
    this.conferenceService.removeOrganizer(this.conference.conferenceId, userId).subscribe();
  }

  addOrganizer(userId: number) {
    this.conferenceService.addOrganizer(this.conference.conferenceId, userId).subscribe();
    console.log(this.conference.conferenceId, userId);
  }
}
