import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, ReplaySubject} from 'rxjs';
import {map} from 'rxjs/operators';
import {List} from '../../../core/models/list.model';
import {EventCreateModel, EventModel} from '../models/event.model';
import {UserModel} from '../../user/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  readonly events$ = new ReplaySubject<EventModel[]>(1);

  constructor(private http: HttpClient) { }

  refreshEvents() {
    this.http.get<List<EventModel>>('/api/events').subscribe(result => {
      // @ts-ignore
      this.events$.next(result);
    });
  }

  getEvent(eventId: number): Observable<EventModel> {
    return this.http.get<EventModel>('/api/events/' + eventId);
  }

  createEvent(event: EventCreateModel): Observable<void>  {
    return this.http.post<void>('/api/events', event);
  }

  change(eventId: number, event: EventCreateModel): Observable<void>  {
    return this.http.put<void>('/api/events/' + eventId, event);
  }

  delete(eventId: number): Observable<void> {
    return this.http.delete<void>('/api/events/' + eventId + '/delete');
  }

  getEvents(value: string): Observable<EventModel[]> {
    return this.events$.pipe(
      map(events => events.filter(event => event.eventName.toLowerCase().includes(value.toLowerCase())))
    );
  }

  getSpeakers(eventId: number): Observable<List<UserModel>> {
    return this.http.get<List<UserModel>>(`/api/events/${eventId}/speakers`);
  }

  removeSpeaker(eventId: number, userId: number): Observable<void> {
    return this.http.delete<void>(`/api/events/${eventId}/speakers/${userId}/delete`);
  }

  addSpeaker(eventIdInput: number, userIdInput: number): Observable<void> {
    return this.http.post<void>(`/api/users/assign/event`, {
      userId: userIdInput,
      eventId: eventIdInput
    });
  }
}
