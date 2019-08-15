import { Component, OnInit } from '@angular/core';
import '@angular/material/prebuilt-themes/deeppurple-amber.css';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../../../../shared/booking/booking.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AvailabilityComponent implements OnInit {
  public destinationList: string[];
  public accomadationsList: string[][];
  public list:string[]=[];
  checkin: Date;
  checkout: Date;
  id: any;
  constructor(private route:ActivatedRoute,private bookingService:BookingService) {

    this.id=this.route.snapshot.params['id'];
    console.log("aaaa");
    console.log(this.accomadationsList);
   }




   updateDestination(){

     this.bookingService.addDestionation(this.route.snapshot.params['id']);
     this.destinationList=this.bookingService.dastinations;
     this.accomadationsList=this.bookingService.accomedations;
     console.log(this.destinationList);
   }
   updateAccomedation(){
    const hoBooking=[
     this.route.snapshot.params['id'],
      this.route.snapshot.params['pax'],
      this.route.snapshot.params['checkin'],
      this.route.snapshot.params['checkout']

    ];
     console.log(hoBooking);
    this.bookingService.addAcoomedations(hoBooking);


    this.accomadationsList=this.bookingService.accomedations;
    this.destinationList=this.bookingService.dastinations;
    console.log(this.accomadationsList);
  }
  ngOnInit() {
   /* this.accomadationsList.forEach(element => {
      this.list.push(element.hotelid);

    });*/
    console.log("aaaa");
    console.log(this.accomadationsList);


    console.log(this.list);

    console.log(this.route.snapshot.params['id']=="place");
    if(this.route.snapshot.params['acc']=="acc"){
      this.updateAccomedation();
    }
    if(this.route.snapshot.params['acc']=="place"){
    this.updateDestination();
    }

  }

  onSubmit(form: NgForm) {
    console.log(form.value);

    const data = {
      bookingid: 'booking' + Date.now(),
      userName:'sanjeewa',
      checkInDate:form.value.checkInDate,
      checkOutDate: form.value.checkOutDate,
      destinationList: this.destinationList,
      accomadationsList: this.accomadationsList
    };

    this.bookingService.setdata(data);


  }

}
