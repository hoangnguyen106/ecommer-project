import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  CanActivate,
  UrlTree,
} from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, public router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (this.authService.isLoggedIn !== true) {
      this.router.navigate(['auth/login']);
    }
    return true;
  }
}
