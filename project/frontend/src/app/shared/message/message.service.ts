import { Injectable } from '@angular/core';
import { Message } from './message.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  selectedMessage: Message = {
    name: "",
    email:"",
    telNo:0,
	  message:""
  };
  constructor(private http: HttpClient ) { }
  addMessage(message: Message){
    console.log("add message service func");
    console.log(message.name);
    return this.http.post(environment.apiBaseUrl + '/message/addmessage', message);
  }
}
