import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";  
import { Observable } from "rxjs";  
import { TouristService } from "../../../../shared/tourist/tourist.service";  
import { dataInterface } from "./tourist.component"; 

@Injectable({
  providedIn: 'root'
})
export class TouristDataResolverService implements Resolve<dataInterface[]> {

  constructor(private touristService : TouristService) {}  
  
  resolve(route: ActivatedRouteSnapshot): Observable<dataInterface[]> {  
    return this.touristService.getAll();  
  }  
}
