import { Component, OnInit } from '@angular/core';
import { SafariService } from '../../../../shared/safari/safari.service';
import { Router,ActivatedRoute } from '@angular/router';
 
export interface dataInterface {
  username:string;
  agencyName:string;
  agencyAddress:string;
  agencyWeb: string;
  agencyEmail: string;
  agencyPhone: number;
  noOfVehicles: number;
}

@Component({
  selector: 'app-safari-agency',
  templateUrl: './safari-agency.component.html',
  styleUrls: ['./safari-agency.component.css'],
  providers: [SafariService]
})
export class SafariAgencyComponent implements OnInit {
  data: dataInterface[];
  displayedColumns: string[] = ["username","agencyName","agencyAddress","agencyWeb","agencyEmail","agencyPhone","noOfVehicles"];
  dataSource = this.safariService.getAll();
  

  constructor(private safariService: SafariService, public router: Router,private route: ActivatedRoute) {
    
  }
  
  ngOnInit() {
    this.safariService.getAll();
    console.log(this.data);
  }

}
