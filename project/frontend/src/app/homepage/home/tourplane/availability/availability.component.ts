import { Component, OnInit } from '@angular/core';
import '@angular/material/prebuilt-themes/deeppurple-amber.css';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AvailabilityComponent implements OnInit {
  public list: string[]=[];
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007; 
  id:any;
  constructor(private route:ActivatedRoute) {
    this.list.push(this.route.snapshot.params['id']);
   }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
  }

}
