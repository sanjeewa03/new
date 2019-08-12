import { Component, OnInit } from '@angular/core';
import '@angular/material/prebuilt-themes/deeppurple-amber.css';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AvailabilityComponent implements OnInit {
  private list: string[]=["a","b","c"];
  constructor() { }

  ngOnInit() {
  }

}
