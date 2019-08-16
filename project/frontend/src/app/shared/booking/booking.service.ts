import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  public dastinations: string[] = [];
  public accomedations: string[][] = [];
  public des: number[][] = [];

  constructor(private http: HttpClient) { }


  addDestionation(id:string){
    if(!this.dastinations.includes(id)){
      this.dastinations.push(id);
    }

  }
  setdata(data: any) {
    console.log(data);

    this.http.post(environment.apiBaseUrl + '/book/pkg', data).subscribe(result => {
      console.log(result);

    });
  }


  getDestinaions(){
    return this.dastinations;
  }
  addAcoomedations(hoBooking:any){
    if(!this.accomedations.includes(hoBooking.id)){
      this.accomedations.push(hoBooking);
    }

  }
  getAcoomedations(){
    return this.accomedations;
  }

}
