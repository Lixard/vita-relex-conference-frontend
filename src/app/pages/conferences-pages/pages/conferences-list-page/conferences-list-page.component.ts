import { Component, OnInit } from '@angular/core';
import {ConferenceModel} from '../../../../entities/conference/models/conference.model';
import {ConferenceService} from '../../../../entities/conference/services/conference.service';
import {combineLatest, Observable, ReplaySubject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-conferences-list-page',
  templateUrl: './conferences-list-page.component.html',
  styleUrls: ['./conferences-list-page.component.scss']
})
export class ConferencesListPageComponent implements OnInit {

  search: string;
  conferences$: Observable<ConferenceModel[]>;
  private filter$ = new ReplaySubject<string>(1);

  constructor(private conferenceService: ConferenceService) { }

  ngOnInit(): void {
    this.conferenceService.refreshConferences();
    const filter$ = this.filter$.pipe(
      debounceTime(100),
      distinctUntilChanged()
    );
    this.conferences$ = combineLatest([filter$, this.conferenceService.conferences$]).pipe(
      switchMap(([filterValue]) => this.conferenceService.getConferences(filterValue)),
    );
    this.filter$.next('');
  }

  handleFilterChange(value: string) {
    this.filter$.next(value);
  }
}
