import { Injectable } from '@angular/core';
import { Hotel } from './hotel.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { dataInterface } from 'src/app/admin/components/sidebar/hotel/hotel.component';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HotelService {
  selectedHotel: Hotel = {
    username: '',
    hotelName:'',
    hoteladdress:'',
    hotelWeb: '',
    hotelEmail:'',
    phone:0,
	  category:'',
    noOfRooms:0,
  };
  constructor(private http: HttpClient ) { }
  addHotel(hotel: Hotel){
    console.log("add hottel service func");
    console.log(hotel.username);
    return this.http.post(environment.apiBaseUrl + '/hotel/addhotel', hotel);
  }
  getAll():Observable<dataInterface[]>{
    console.log("getAll hotel service func");
    return this.http.get<dataInterface[]>(environment.apiBaseUrl + '/hotel/getall');
  }
}
