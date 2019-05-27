import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../../../../shared/hotel/hotel.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Hotel } from '../../../../../shared/hotel/hotel.model';


@Component({
  selector: 'app-hotel-add',
  templateUrl: './hotel-add.component.html',
  styleUrls: ['./hotel-add.component.css'],
  providers: [HotelService]
})
export class HotelAddComponent implements OnInit {

  constructor(private hotelService: HotelService, public router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log(form.value)
    this.hotelService.addHotel(form.value).subscribe(
      res => {
        console.log(res);
        form.reset();

      }
      
    );

  }


}
