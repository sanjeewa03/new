import { Injectable } from '@angular/core';
import { Hotel } from './hotel.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HotelService {
  selectedHotel: Hotel = {
    hotelID: 0,
    hotelName:'',
    location:'',
    email: '',
    fax:'',
    hotelType:'',
	  noOfRooms:0,
    pricePerRoom:0,
  };
  constructor(private http: HttpClient ) { }
  addHotel(hotel: Hotel){
    console.log("add hottel service func");
    console.log(hotel.hotelID);
    return this.http.post(environment.apiBaseUrl + '/hotel/addhotel', hotel);
  }
}
