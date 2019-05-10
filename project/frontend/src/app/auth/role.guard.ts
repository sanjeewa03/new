import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import decode from 'jwt-decode';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // this will be passed from the route config
      // on the data property
    if(localStorage.getItem('token')){
      const expectedRole = next.data.expectedRole;
      const token = localStorage.getItem('token');
      // decode the token to get its payload
      const tokenPayload = decode(token);
      console.log(tokenPayload);
      if (!this.auth.isAuthenticated() || tokenPayload.role !== expectedRole) {
        if(this.auth.isAuthenticated()&&tokenPayload.role !== expectedRole){
          if(tokenPayload.role=='User'){
            console.log("1.2.1");
            this.router.navigate(['/tourist']);
            localStorage.setItem('time', String(Date.now()) );
            return false;
          }
          else if(tokenPayload.role=='Admin'){
            console.log("1.2.2");
            this.router.navigate(['/admin']);
            localStorage.setItem('time', String(Date.now()) );
            return false;
          }
        }
        localStorage.clear();
        this.router.navigate(['/home']);
        return false;
      }
      return true;
    }
    else{
      localStorage.clear();
        this.router.navigate(['/home']);
        return false;
    }
  }
  
}
