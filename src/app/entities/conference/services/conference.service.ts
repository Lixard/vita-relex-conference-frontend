import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ConferenceCreateModel, ConferenceModel} from '../models/conference.model';
import {List} from '../../../core/models/list.model';

@Injectable({
  providedIn: 'root'
})
export class ConferenceService {

  constructor(private http: HttpClient) { }

  getConferences(): Observable<List<ConferenceModel>> {
    return this.http.get<List<ConferenceModel>>('/api/conferences');
  }

  getConferenceById(id: number): Observable<ConferenceModel> {
    return this.http.get<ConferenceModel>(`/api/conferences/${id}`);
  }

  getEventsByConferenceId(id: number): Observable<List<Event>> {
    return this.http.get<List<Event>>(`/api/conferences/${id}/events`);
  }

  update(id: number, conference: ConferenceCreateModel): Observable<ConferenceModel> {
    return this.http.put<ConferenceModel>(`/api/conferences/${id}`, conference);
  }

  create(conference: ConferenceCreateModel): Observable<ConferenceModel> {
    return this.http.post<ConferenceModel>('/api/conferences', conference);
  }

}
