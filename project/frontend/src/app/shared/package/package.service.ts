import { Injectable } from '@angular/core';
import { Package } from './package.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { dataInterface } from 'src/app/admin/components/sidebar/packages/packages.component';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PackageService {
selectedPackage: Package = {
    username:'',
    firstName:'',
    lastName:'',
    birthDate:new Date(),
    gender:'',
    phoneNumber:0,
    password:'',
    nationality:'',
    email: '',
   
  };
  constructor(private http: HttpClient ) { }
  addPackage(packages: Package){
    console.log("add tourist service func");
    console.log(packages.username);
    return this.http.post(environment.apiBaseUrl + '/package/addpackage', packages);
  }

  getAll():Observable<dataInterface[]>{
    console.log("getAll tourist service func");
    return this.http.get<dataInterface[]>(environment.apiBaseUrl + '/package/getall');
  }
}
          