import { Injectable } from '@angular/core';
import { Tourist } from './tourist.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class TouristService {
selectedTourist: Tourist = {
    passportID: 0,
    name:'',
    password:'',
    nationality:'',
    email: '',
    tpNo:0
   
  };
  constructor(private http: HttpClient ) { }
  addTourist(tourist: Tourist){
    console.log("add tourist service func");
    console.log(tourist.passportID);
    return this.http.post(environment.apiBaseUrl + '/tourist/addtourist', tourist);
  }
}
