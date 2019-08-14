import { Injectable } from '@angular/core';
import { Place } from './place.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { dataInterface } from '../../admin/components/sidebar/places/places.component';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  selectedPlace: Place = {
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
  addPlace(place: Place){
    console.log("add place service func");
    console.log(place.id);
    return this.http.post(environment.apiBaseUrl + '/place/addplace', place);
  }
  getAll():Observable<dataInterface[]>{
    console.log("getAll place service func");
    return this.http.get<dataInterface[]>(environment.apiBaseUrl + '/place/getall');
  }
}
