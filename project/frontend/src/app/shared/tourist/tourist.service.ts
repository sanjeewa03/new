import { Injectable } from '@angular/core';
import { Tourist } from './tourist.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from "rxjs";
import { delay } from "rxjs/operators";  
import { dataInterface } from "../../admin/components/sidebar/tourist/tourist.component"; 


@Injectable({
  providedIn: 'root'
})
export class TouristService {
selectedTourist: Tourist = {
    username:'',
    firstName:'',
    lastName:'',
    birthDate:new Date(),
    gender:'',
    phoneNumber:0,
    password:'',
    nationality:'',
    email: '',
   
  };
  constructor(private http: HttpClient ) { }
  addTourist(tourist: Tourist){
    console.log("add tourist service func");
    console.log(tourist.username);
    return this.http.post(environment.apiBaseUrl + '/tourist/addtourist', tourist);
  }

  getAll(): Observable<dataInterface[]>{
    console.log("getAll tourist service func");
    return this.http.get<dataInterface[]>(environment.apiBaseUrl + '/tourist/getall').pipe(delay(1000));
    
  }
}
