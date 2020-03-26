import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ConferenceModel} from '../models/conference.model';
import {List} from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class ConferenceService {

  constructor(private http: HttpClient) { }

  getConferences(): Observable<List<ConferenceModel>> {
    return this.http.get<List<ConferenceModel>>('/conferences');
  }

  getConferenceById(id: number): Observable<ConferenceModel> {
    return this.http.get<ConferenceModel>(`/conferences/${id}`);
  }

  getEventsByConferenceId(id: number): Observable<List<Event>> {
    return this.http.get<List<Event>>(`/conferences/${id}/events`);
  }

  update(id: number, conference: ConferenceModel): Observable<ConferenceModel> {
    return this.http.put<ConferenceModel>(`/conferences/${id}`, conference);
  }

  create(conference: ConferenceModel): Observable<ConferenceModel> {
    return this.http.post<ConferenceModel>('/conferences', conference);
  }

}
