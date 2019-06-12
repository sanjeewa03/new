import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../../../shared/hotel/hotel.service';
import { Router,ActivatedRoute } from '@angular/router';
 
export interface dataInterface {
  username:string;
  hotelName:string;
  hoteladdress:string;
  hotelWeb: string;
  hotelEmail: string;
  phone: number;
  category: string;
  noOfRooms: number;
}

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css'],
  providers: [HotelService]
})
export class HotelComponent implements OnInit {
  data: dataInterface[];
  displayedColumns: string[] = ["username","hotelName","hoteladdress","hotelWeb","hotelEmail","phone","category","noOfRooms"];
  dataSource = this.hotelService.getAll();
  

  constructor(private hotelService: HotelService, public router: Router,private route: ActivatedRoute) {
    
  }
  
  ngOnInit() {
    this.hotelService.getAll();
    console.log(this.data);
  }

}
