import {Component, OnInit, Output} from '@angular/core';
import {ConferenceCreateForm, ConferenceCreateModel} from '../../entities/conference/models/conference.model';
import {ConferenceService} from '../../entities/conference/services/conference.service';
import {ConferenceDetailsModel} from '../../entities/conference/models/conference-details.model';
import {UserModel} from '../../entities/user/models/user.model';
import {List} from '../../core/models/list.model';
import {UserService} from '../../entities/user/service/user.service';


@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.scss']
})
export class MainToolbarComponent implements OnInit {

  @Output()
  users: List<UserModel>;
  createConferenceVision = false;

  constructor(private conferenceService: ConferenceService, private userService: UserService) { }

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
  searchTemplate(searchTemplate: string) {
    this.userService.searchUsers(searchTemplate).subscribe(result => {
      this.users = result;
    });
  }
}
