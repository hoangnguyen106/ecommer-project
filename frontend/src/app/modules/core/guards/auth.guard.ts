import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  CanActivate,
  UrlTree,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../../console/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    public router: Router,
    private toastrService: ToastrService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (this.authService.isLoggedIn !== true) {
      this.router.navigate(['console/login']);
    }
    return true;
  }
}
