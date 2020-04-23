import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserCreateModel, UserModel} from '../models/user.model';
import {List} from '../../../core/models/list.model';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  searchUsers(searchTemplate: string): Observable<List<UserModel>> {
    return this.http.get<List<UserModel>>('/api/users',
    {params: new HttpParams().set('search', searchTemplate)});
}
  getUsers(): Observable<List<UserModel>> {
    return this.http.get<List<UserModel>>('/api/users');
  }
  findUsers(filterValue: string): Observable<List<UserModel>> {
    return this.http.get<List<UserModel>>('/api/users').pipe(
      // @ts-ignore
      map( users => users.filter(user => user.username.toLowerCase().includes(filterValue.toLowerCase())))
    );
  }
  getUsersById(id: number): Observable<UserModel> {
    return this.http.get<UserModel>('/api/users/' + id);
  }
  changeUser(id: number, user: UserCreateModel): Observable<UserModel> {
    return this.http.put<UserModel>('/api/users/' + id, user);
  }

  getSpeakersByEventId(id: number): Observable<List<UserModel>> {
    return this.http.get<List<UserModel>>(`/api/events/${id}/speakers`);
  }
}
