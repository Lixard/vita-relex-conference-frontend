import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserModel} from '../model/user.model';
import {List} from '../../../core/models/list.model';


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
  getUsersById(id: number): Observable<UserModel> {
    return this.http.get<UserModel>('/api/users/' + id);
  }
}
