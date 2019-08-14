import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  public dastinations: string[]=[];

  addDestionation(id:string){
    this.dastinations.push(id);

  }
  getDestinaions(){
    return this.dastinations;
  }

  constructor() { }
}
