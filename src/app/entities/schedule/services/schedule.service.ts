import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../../core/services/auth.service';
import {Observable, ReplaySubject} from 'rxjs';
import {EventModel} from '../../event/models/event.model';
import {List} from '../../../core/models/list.model';
import {CurrentUserService} from '../../../core/services/current-user.service';
import {map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  readonly schedule$ = new ReplaySubject<EventModel[]>(1);

  isCorrect = false;

  constructor(private http: HttpClient, private currentUser: CurrentUserService) {
  }

  add(event: number): Observable<void> {
    this.isCorrect = false;
    let user;
    this.currentUser.user$.subscribe(CurrentUser => user = CurrentUser.id);
    return this.http.post<void>('/api/events/subscribe', {eventId: event, userId: user});
  }

  remove(event: number): Observable<void> {
    this.isCorrect = false;
    let user;
    this.currentUser.user$.subscribe(CurrentUser => user = CurrentUser.id);
    return this.http.delete<void>('/api/users/' + user + '/schedule/' + event + '/delete');
  }

  refreshSchedule() {
    let user;
    this.currentUser.user$.subscribe(CurrentUser => user = CurrentUser.id);
    this.http.get<List<EventModel>>('/api/users/' + user + '/schedule').subscribe(result => {
        // @ts-ignore
      this.schedule$.next(result);
      }
    );
  }

  scheduled(event: EventModel): Observable<boolean> {
    return this.schedule$.pipe(
      map( result => {
        return result.map(item => {
          return item.eventId;
        }).includes(event.eventId);
      })
    );
  }
}
