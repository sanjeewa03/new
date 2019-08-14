import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  public dastinations: string[]=[];
  public accomedations:string[]=[];

  addDestionation(id:string){
    if(!this.dastinations.includes(id)){
      this.dastinations.push(id);
    }

  }
  getDestinaions(){
    return this.dastinations;
  }
  addAcoomedations(id:string){
    if(!this.accomedations.includes(id)){
      this.accomedations.push(id);
    }

  }
  getAcoomedations(){
    return this.accomedations;
  }

  constructor() { }
}
