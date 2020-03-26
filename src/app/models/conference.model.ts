import {ConferenceDetailsModel} from './conference-details.model';

export interface ConferenceModel {
  conferenceId: number;
  conferenceName: string;
  shortHtmlDescription?: string;
  owner: number;
  details: ConferenceDetailsModel;
}
