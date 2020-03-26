import {EventDetailsModel} from './event-details.model';

export interface EventModel {
  eventId: number;
  eventName: string;
  eventType: string;
  conferenceId: number;
  details: EventDetailsModel;
}
