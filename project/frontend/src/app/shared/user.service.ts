import { Injectable } from '@angular/core';

import { User } from './user.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    username: '',
    firstName: '',
    role: '',
    lastName: '',
    password: '',
  };

  constructor(private http: HttpClient ) { }
  postUser(user: User){
    console.log(user);
    return this.http.post(environment.apiBaseUrl + '/register', user);
  }
}
