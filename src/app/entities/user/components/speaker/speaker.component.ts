import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss']
})
export class SpeakerComponent implements OnInit {

  @Input()
  user: UserModel;

  constructor() { }

  ngOnInit(): void {

  }
}
