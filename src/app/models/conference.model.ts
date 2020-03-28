import {ConferenceDetailsModel} from './conference-details.model';

export interface ConferenceModel {
  conferenceId: number;
  conferenceName: string;
  owner: number;
  details: ConferenceDetailsModel;
}

export interface ConferenceCreateModel {
  conferenceName: string;
  owner: number;
  details: ConferenceDetailsModel;
}
