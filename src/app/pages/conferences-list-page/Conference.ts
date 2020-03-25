import {ConferenceDetails} from './ConferenceDetails';

export interface Conference {
  conferenceId: number;
  conferenceName: string;
  shortHtmlDescription?: string;
  owner: number;
  details: ConferenceDetails;
}
