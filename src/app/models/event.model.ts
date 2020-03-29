import {EventDetailsModel} from './event-details.model';

export enum EventType{
  MEETUP = 'MEETUP',
  LECTURE = 'LECTURE',
  SEMINAR = 'SEMINAR',
  PRODUCT_PRESENTATION = 'PRODUCT_PRESENTATION',
  ENTERTAINING_EVENT = 'ENTERTAINING_EVENT',
}

export interface EventModel {
  eventId: number;
  eventName: string;
  eventType: EventType;
  conferenceId: number;
  details: EventDetailsModel;
}

export interface EventCreateModel {
  eventName: string;
  eventType: EventType;
  conferenceId: number;
  details: EventDetailsModel;
}

export class EventCreateForm {
  eventName: string;
  eventType: EventType;
  htmlDescription: string;
  location: string;
  timeStart: string;
  timeEnd: string;
}
