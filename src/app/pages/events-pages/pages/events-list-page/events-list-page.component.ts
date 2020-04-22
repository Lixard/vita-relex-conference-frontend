import { Component, OnInit } from '@angular/core';
import {EventService} from '../../../../entities/event/services/event.service';
import {ScheduleService} from '../../../../entities/schedule/services/schedule.service';
import {combineLatest, Observable, ReplaySubject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {EventModel} from '../../../../entities/event/models/event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events-list-page.component.html',
  styleUrls: ['./events-list-page.component.scss']
})
export class EventsListPageComponent implements OnInit {

  search: string;
  filteredEvents$: Observable<EventModel[]>;
  private filter$ = new ReplaySubject<string>(1);

  constructor(private eventService: EventService,
              private schedule: ScheduleService) { }

  ngOnInit(): void {
    this.schedule.refreshSchedule();
    this.eventService.refreshEvents();
    const filter$ = this.filter$.pipe(
      debounceTime(100),
      distinctUntilChanged()
    );
    this.filteredEvents$ = combineLatest([filter$, this.eventService.events$]).pipe(
      switchMap(([filterValue]) => this.eventService.getEvents(filterValue)),
    );
    this.filter$.next('');
  }

  handleFilterChange(value: string) {
    this.filter$.next(value);
  }
}
