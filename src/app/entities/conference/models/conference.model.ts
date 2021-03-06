import {ConferenceDetailsModel} from './conference-details.model';

export interface ConferenceModel {
  conferenceId: number;
  conferenceName: string;
  owner: number;
  deleted?: boolean;
  details: ConferenceDetailsModel;
}

export interface ConferenceCreateModel {
  conferenceName: string;
  owner: number;
  details: ConferenceDetailsModel;
}

export class ConferenceCreateForm {
  conferenceName: string;
  htmlDescription: string;
  linkImage: string;
  shortDescription: string;
  location: string;
  dateStart: string;
  dateEnd: string;
}
