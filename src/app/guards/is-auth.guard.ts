import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class IsAuthGuard implements CanActivate {
  state: boolean = false;
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if ('accessToken' in localStorage) {
      this.state = false;
      this.router.navigateByUrl('/');
    } else {
      this.state = true;
    }
    return this.state;
  }
}
