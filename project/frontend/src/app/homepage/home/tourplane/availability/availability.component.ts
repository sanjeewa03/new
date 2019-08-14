import { Component, OnInit } from '@angular/core';
import '@angular/material/prebuilt-themes/deeppurple-amber.css';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../../../../shared/booking/booking.service'

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AvailabilityComponent implements OnInit {
  public destinationList:String[];
  public accomadationsList:String[];
  title: string = 'My first AGM project';
  lat: number;
  lng: number;
  public origin;
  public destination;
  
  public waypoints;
    /*{
      location: { lat: 51.373858, lng: 7.215982 },
      stopover: true
    },
    {
      location: { lat: 51.723858, lng: 7.895982 },
      stopover: true
    }*/
  id:any;
  constructor(private route:ActivatedRoute,private bookingService:BookingService) {
    
    this.set();
   }
   async set(){
    this.lat=7.033351;
    this.lng= 79.898529;
    this.id=this.route.snapshot.params['id'];
    this.origin= { lat: 6.086959, lng: 79.034443 };
    this.destination= { lat: 6.901760, lng: 79.861821};
    this.waypoints = [
      {
        location: { lat: 7.033351, lng: 79.898529 },
        stopover: true
      }
    ]
   }

   updateDestination(){
     this.bookingService.addDestionation(this.route.snapshot.params['id']);
     this.destinationList=this.bookingService.dastinations;
     console.log(this.destinationList);
   }
   updateAccomedation(){
    this.bookingService.addAcoomedations(this.route.snapshot.params['id']);
    this.accomadationsList=this.bookingService.accomedations;
    console.log(this.accomadationsList);
  }
  ngOnInit() {
    console.log(this.route.snapshot.params['id']=="place");
    if(this.route.snapshot.params['acc']=="acc"){
      this.updateAccomedation();
    }
    if(this.route.snapshot.params['acc']=="place"){
    this.updateDestination();
    }
    
  }

}
