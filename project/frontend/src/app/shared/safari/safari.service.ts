import { Injectable } from '@angular/core';
import { Safari } from './safari.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SafariService {
  selectedSafari: Safari = {
    safariID: 0,
    safariName:'',
    location:'',
    email: '',
    fax:'',
	noOfVehicles:0,
   
  };
  constructor(private http: HttpClient ) { }
  addAgency(safari: Safari){
    console.log("add safari service func");
    console.log(safari.safariID);
    return this.http.post(environment.apiBaseUrl + '/safari/addagency', safari);
  }
}
