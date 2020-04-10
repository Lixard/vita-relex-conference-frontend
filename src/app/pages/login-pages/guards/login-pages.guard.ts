import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {CurrentUserService} from '../../../core/services/current-user.service';
import {Role} from '../../../core/models/current-user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginPagesGuard implements CanActivate {

  constructor(private currentUser: CurrentUserService) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}
