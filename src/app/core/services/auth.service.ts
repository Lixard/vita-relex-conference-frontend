import {APP_INITIALIZER, Injectable, Provider} from '@angular/core';
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

  login(data: LoginData): Observable<CurrentUser> {
    const params = new HttpParams({
      fromObject: {
        username: data.username,
        password: data.password
      }
    });

    const myHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    this.http.post<void>('/auth/login', params.toString(), {
      headers: myHeaders
    }).subscribe();
    return this.loadProfile();
  }

  logout(): Observable<CurrentUser> {
    this.http.get<void>('/auth/logout').subscribe();
    this.loadProfile().subscribe();
    return this.user$;
  }

  initialize() {
    return new Promise<void>(resolve => {
      this.loadProfile();
      resolve();
    });
  }
}
export function loadCurrentUser(authService: AuthService): () => Promise<void> {
  return () => authService.initialize();
}

export const LOAD_CURRENT_USER_INITIALIZER: Provider = {
  provide: APP_INITIALIZER,
  useFactory: loadCurrentUser,
  multi: true,
  deps: [AuthService]
};
