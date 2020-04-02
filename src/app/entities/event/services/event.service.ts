import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {List} from '../../../core/models/list.model';
import {EventCreateModel, EventModel} from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getEvents(): Observable<List<EventModel>> {
    return this.http.get<List<EventModel>>('/api/events');
  }

  getEvent(eventId: number): Observable<EventModel> {
    return this.http.get<EventModel>('/api/events/' + eventId);
  }

  createEvent(event: EventCreateModel) {
    this.http.post('/api/events', event);
  }

  change(eventId: number, event: EventCreateModel) {
    this.http.put('/api/events/' + eventId, event);
  }
}
