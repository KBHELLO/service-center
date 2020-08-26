import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Constant} from './Helper/constant';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private route: Router) {
  }

  canActivate(): boolean {
    if (localStorage.getItem(Constant.REQUESTER_ID)) {
      return true;
    } else {
      this.route.navigate(['/login']);
    }
  }
}
