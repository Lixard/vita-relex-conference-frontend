import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {switchMap} from 'rxjs/operators';
import {CurrentUser} from '../../models/current-user.model';
import {Router} from '@angular/router';
import {CurrentUserService} from '../../services/current-user.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {

  readonly user$ = this.currentUser.user$;

  constructor(private authService: AuthService,
              private currentUser: CurrentUserService,
              private router: Router) {
  }

  ngOnInit(): void {

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
