import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {switchMap} from 'rxjs/operators';
import {CurrentUser} from '../../models/current-user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {

  readonly user$ = this.authService.user$;

  // user: CurrentUser;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {

  }

  handleLogoutClick() {
    this.authService.logout().subscribe();
    this.router.navigateByUrl('/login');
  }
}
