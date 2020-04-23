import {Component, Input, OnInit} from '@angular/core';
import {combineLatest, Observable, ReplaySubject} from 'rxjs';
import {UserModel} from '../../../user/models/user.model';
import {UserService} from '../../../user/service/user.service';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {EventModel} from '../../models/event.model';
import {EventService} from '../../services/event.service';

@Component({
  selector: 'app-speakers-list',
  templateUrl: './speakers-list.component.html',
  styleUrls: ['./speakers-list.component.scss']
})
export class SpeakersListComponent implements OnInit {
  @Input()
  event: EventModel;
  readonly speakers$ = new ReplaySubject<UserModel[]>(1);
  readonly users$ = new ReplaySubject<UserModel[]>(1);

  search: string;
  filteredUsers$: Observable<UserModel[]>;
  private filter$ = new ReplaySubject<string>(1);

  constructor(private eventService: EventService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.refreshSpeakers();
    this.refreshUsers();
    const filter$ = this.filter$.pipe(
      debounceTime(100),
      distinctUntilChanged()
    );
    // @ts-ignore
    this.filteredUsers$ = combineLatest([filter$, this.users$]).pipe(
      switchMap(([filterValue]) => this.userService.findUsers(filterValue)),
    );
    this.filter$.next('');
  }

  private refreshUsers() {
    this.userService.getUsers().subscribe(result => {
      // @ts-ignore
      this.users$.next(result);
    });
  }

  private refreshSpeakers() {
    this.eventService.getSpeakers(this.event.eventId).subscribe(result => {
      // @ts-ignore
      this.speakers$.next(result);
    });
  }

  removeSpeaker(userId: number) {
    this.eventService.removeSpeaker(this.event.eventId, userId).subscribe();
    this.refreshSpeakers();
    this.refreshUsers();
  }

  addSpeaker(userId: number) {
    this.eventService.addSpeaker(this.event.eventId, userId).subscribe();
    this.refreshSpeakers();
    this.refreshUsers();
  }

  handleFilterChange(value: string) {
    this.filter$.next(value);
  }
}
