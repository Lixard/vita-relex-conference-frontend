import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../../core/services/auth.service';
import {Observable} from 'rxjs';
import {EventModel} from '../../event/models/event.model';
import {List} from '../../../core/models/list.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private schedule: Observable<List<EventModel>>;

  isCorrect = false;

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  add(event: number): Observable<void> {
    this.isCorrect = false;
    let user = 1;
    // this.authService.loadProfile().subscribe(CurrentUser => user = CurrentUser.userId);
    return this.http.post<void>('/api/events/subscribe', {eventId: event, userId: user});
  }

  remove(event: number): Observable<void> {
    this.isCorrect = false;
    let user = 1;
    // this.authService.loadProfile().subscribe(CurrentUser => user = CurrentUser.userId);
    return this.http.delete<void>('/api/users/' + event + '/schedule/' + user + '/delete');
  }

  getSchedule(): Observable<List<EventModel>> {
    if (!this.isCorrect) {
      this.isCorrect = true;
      let user = 1;
      // this.authService.loadProfile().subscribe(CurrentUser => user = CurrentUser.userId);
      this.schedule = this.http.get<List<EventModel>>('/api/users/' + user + '/schedule');
    }
    return this.schedule;
  }

  scheduled(event: EventModel): boolean {
    let schedule;
    this.getSchedule().subscribe(result => schedule = result);
    console.log(schedule);
    return schedule.includes(event);
  }
}
