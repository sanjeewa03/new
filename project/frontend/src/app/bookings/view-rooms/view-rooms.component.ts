import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-rooms',
  templateUrl: './view-rooms.component.html',
  styleUrls: ['./view-rooms.component.css']
})
export class ViewRoomsComponent implements OnInit {
  
  model:any;
  constructor() { }

  ngOnInit() {
    this.model=
    [
     { type:'single',
       ac_non:'AC',
       meal:'free dinner',
       Payment:'paid',
       Phone:'0714578412',
       rent:'2$' 
     },

     { type:'Double',
     ac_non:'AC',
     meal:'free dinner',
     Payment:'paid',
     Phone:'0714578412',
     rent:'5$' 
   },

   { type:'single',
   ac_non:'AC',
   meal:'free lunch',
   Payment:'paid',
   Phone:'0714578412',
   rent:'2$' 
 },

 { type:'Double',
 ac_non:'AC',
 meal:'None',
 Payment:'paid',
 Phone:'0714578412',
 rent:'7$' 
}


    ]
  }

}
