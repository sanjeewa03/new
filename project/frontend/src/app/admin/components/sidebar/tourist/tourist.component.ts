import { Component, OnInit } from '@angular/core';
import { TouristService } from '../../../../shared/tourist/tourist.service';
import { Router,ActivatedRoute } from '@angular/router';
 

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
  selector: 'app-tourist',
  templateUrl: './tourist.component.html',
  styleUrls: ['./tourist.component.css'],
  providers: [TouristService]
})
export class TouristComponent implements OnInit {
  data: dataInterface[];
  displayedColumns: string[] = ["username","firstName","lastName","birthDate","gender","phoneNumber","nationality","email"];
  dataSource = this.touristService.getAll();
  

  constructor(private touristService: TouristService, public router: Router,private route: ActivatedRoute) {
    
  }
  
  ngOnInit() {
    this.touristService.getAll();
    console.log(this.data);
  }

}
