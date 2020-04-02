import {Component, Input, OnInit} from '@angular/core';
import {ConferenceModel} from '../../models/conference.model';

@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.scss']
})
export class ConferenceComponent implements OnInit {

  @Input()
  conference: ConferenceModel;

  constructor() { }

  ngOnInit(): void {
  }

}
