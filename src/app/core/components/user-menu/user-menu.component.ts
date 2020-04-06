import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {switchMap} from 'rxjs/operators';
import {CurrentUser} from '../../models/current-user.model';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {

  user: CurrentUser;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.refresh();
  }

  handleLogoutClick() {
    this.authService.logout().subscribe();
    this.refresh();
  }

  refresh() {
    this.authService.loadProfile().subscribe(result => this.user = result);
  }

}
