import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {switchMap} from 'rxjs/operators';
import {AuthenticatedUser, CurrentUser} from '../../models/current-user.model';
import {Router} from '@angular/router';
import {CurrentUserService} from '../../services/current-user.service';
import {UserModel} from '../../../entities/user/models/user.model';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {

  readonly user$ = this.currentUser.user$;
  user: AuthenticatedUser;

  constructor(private authService: AuthService,
              private currentUser: CurrentUserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.user$.subscribe((user: AuthenticatedUser) => {
      this.user = user;
    });
  }

  handleLogoutClick() {
    this.authService.logout()
      .pipe(switchMap(() => this.authService.loadProfile()))
      .subscribe(user => {
        this.currentUser.user$.next(user);
        this.router.navigateByUrl('/login');
      });
  }
}
