import {EventDetails} from './EventDetails';

export interface Event {
  eventId: number;
  eventName: string;
  eventType: string;
  conferenceId: number;
  details: EventDetails;
}
