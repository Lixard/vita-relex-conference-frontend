import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  createConferenceVision = false;
  title = 'frontend';

  openCreateConference() {
    this.createConferenceVision = true;
  }

  hideCreateConference() {
    this.createConferenceVision = false;
  }
}
