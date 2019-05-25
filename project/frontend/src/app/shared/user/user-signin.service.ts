import { Injectable } from '@angular/core';

import { User } from './user.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserSigninService {

  selectedUser: User = {
    username: '',
    role: '',
    password: '',
    firstName:'',
    lastName:'',
    birthDate:new Date(),
    gender:'',
    phoneNumber:0,
    nationality:'',
    email: '',
  };

  constructor(private http: HttpClient ) { }

  postUser(user: User){
    console.log(user);
    return this.http.post(environment.apiBaseUrl + '/users/authenticate', user);
  }

}
