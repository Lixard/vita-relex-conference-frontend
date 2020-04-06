import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {CurrentUser, Role} from '../models/current-user.model';
import {Observable, ReplaySubject} from 'rxjs';
import {LoginData} from '../models/login-data.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

 readonly user$ = new ReplaySubject<CurrentUser>(1);

  constructor(private http: HttpClient) {
  }

  loadProfile(): Observable<CurrentUser> {
    this.http.get<CurrentUser>(`/auth/this`).subscribe( result => this.user$.next(result), error => this.user$.next(error));
    return this.user$;
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

    return this.http.post<void>('/auth/login', params.toString(), {
      headers: myHeaders
    });
  }

  logout(): Observable<void> {
    this.user$.next({authenticated: false} as CurrentUser);
    return this.http.get<void>('/auth/logout');
  }
}
