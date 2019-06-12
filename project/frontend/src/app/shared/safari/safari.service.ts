import { Injectable } from '@angular/core';
import { Safari } from './safari.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { dataInterface } from 'src/app/admin/components/sidebar/safari-agency/safari-agency.component';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SafariService {
  selectedSafari: Safari = {
    username: '',
    agencyName:'',
    agencyAddress:'',
    agencyWeb: '',
    agencyEmail:'',
    agencyPhone:0,
    noOfVehicles:0
   
  };
  constructor(private http: HttpClient ) { }
  addAgency(safari: Safari){
    console.log("add safari service func");
    console.log(safari.username);
    return this.http.post(environment.apiBaseUrl + '/safari/addagency', safari);
  }

  getAll():Observable<dataInterface[]>{
    console.log("getAll safari service func");
    return this.http.get<dataInterface[]>(environment.apiBaseUrl + '/safari/getall');
  }
}
