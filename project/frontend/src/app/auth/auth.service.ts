import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public jwtHelper: JwtHelperService) {}
  // ...
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    const time = parseInt( localStorage.getItem('time'));
    const now= Date.now();
    if(!token||(time < now-300000)){
      return false;
    }
    else{
      
      localStorage.setItem('time', String(Date.now()) );
      return true;
    }
    
    
    // Check whether the token is expired and return
    // true or false
   
  }
}

