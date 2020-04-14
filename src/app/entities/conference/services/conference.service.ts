import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ConferenceCreateModel, ConferenceModel} from '../models/conference.model';
import {List} from '../../../core/models/list.model';
import {UserModel} from '../../user/models/user.model';

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

  getConferencesByUserId(id: number): Observable<List<ConferenceModel>> {
    return this.http.get<List<ConferenceModel>>(`/api/users/${id}/conferences`);
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

  delete(conferenceId: number): Observable<void> {
    return this.http.delete<void>(`/api/conferences/${conferenceId}/delete`);
  }

  getConferencesWhereUserIsOwner(id: number): Observable<List<ConferenceModel>> {
    return this.http.get<List<ConferenceModel>>(`/api/users/${id}/conferences/owned`);
  }

  getOrganizers(id: number): Observable<List<UserModel>> {
    return this.http.get<List<UserModel>>(`/api/conferences/${id}/organizers`);
  }

  resurrect(conferenceId: number) {
    return this.http.patch<void>(`/api/conferences/${conferenceId}/resurrect`, null);
  }

  removeOrganizer(conferenceId: number, userId: number) {
    return this.http.delete<void>(`/api/conferences/${conferenceId}/organizers/${userId}/delete`);
  }

  addOrganizer(conferenceIdInput: number, userIdInput: number) {
    return this.http.post<void>(`/api/users/assign/conference`, {
      userId: conferenceIdInput,
      conferenceId: userIdInput
    });
  }
}
