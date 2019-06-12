import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-town',
  templateUrl: './town.component.html',
  styleUrls: ['./town.component.css']
})
export class TownComponent implements OnInit {

  pathh= "http://localhost:4000/anuradhapura.jpg";
  name="Anuradhapura";
  

  constructor() { }

  ngOnInit() {
  }

}
