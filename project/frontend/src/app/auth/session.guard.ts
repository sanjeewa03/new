import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import decode from 'jwt-decode';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

  constructor( public router: Router) {}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    
    const now= Date.now();

    if(localStorage.getItem('token')&&parseInt( localStorage.getItem('time'))){
      console.log("1");
      const token = localStorage.getItem('token');
      // decode the token to get its payload
      const tokenPayload = decode(token);
      console.log(tokenPayload);

      const time = parseInt( localStorage.getItem('time'));
      if(time < now-300000){
        console.log("1.1");
        localStorage.clear();
        return true;
      }
      else{
        console.log("1.2");
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

    }
    else{
      console.log("2");
      localStorage.clear();
      return true;
    }
  }
  
}
