import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {CurrentUser} from '../models/current-user.model';
import {Observable} from 'rxjs';
import {LoginData} from '../models/login-data.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  loadProfile(): Observable<CurrentUser> {
    return this.http.get<CurrentUser>(`/api/auth/this`);
  }

  login(data: LoginData): Observable<void> {
    const params = new HttpParams({
      fromObject: {
        username: data.username,
        password: data.password
      }
    });

    const myHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    return this.http.post<void>('/api/auth/login', params.toString(), {
      headers: myHeaders
    });
  }

  logout(): Observable<void> {
    return this.http.get<void>('/api/auth/logout');
  }
}
