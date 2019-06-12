import { Component, OnInit } from '@angular/core';
import { PackageService } from '../../../../shared/package/package.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Package } from 'src/app/shared/package/package.model';
 
export interface dataInterface {
  username:string;
  firstName:string;
  lastName:string;
  birthDate: any;
  gender: string;
  phoneNumber: number;
  nationality: string;
  email: string;
}


@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css'],
  providers: [PackageService]
})
export class PackagesComponent implements OnInit {

  data: dataInterface[];
  displayedColumns: string[] = ["username","firstName","lastName","birthDate","gender","phoneNumber","nationality","email"];
  dataSource = this.packageService.getAll();
  

  constructor(private packageService: PackageService, public router: Router,private route: ActivatedRoute) {
    
  }
  
  ngOnInit() {
    this.packageService.getAll();
    console.log(this.data);
  }
  

}
