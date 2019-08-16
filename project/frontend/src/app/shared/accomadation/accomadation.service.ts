import { Injectable } from '@angular/core';
import { Accomadation } from './accomadation.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { dataInterface } from '../../admin/components/sidebar/accomadations/accomadations.component';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AccomadationService {

  selectedAccomadation: Accomadation = {
    id:0,
    category:"",
    header:"",
    title:"",
    caption:"",
    url:"",
    url1:"",
    url2:"",
    url3:"",
    url4:"",
    url5:"",
    url6:"",
    url7:"",
    url8:""
    
  };
  constructor(private http: HttpClient ) { }
  addAccomadation(accomadation: Accomadation){
    console.log("add accomadation service func");
    console.log(accomadation.title);
    return this.http.post(environment.apiBaseUrl + '/accomadation/addaccomadation', accomadation);
  }
  getAll():Observable<dataInterface[]>{
    console.log("getAll place service func");
    return this.http.get<dataInterface[]>(environment.apiBaseUrl + '/accomadation/getall');
  }
}
