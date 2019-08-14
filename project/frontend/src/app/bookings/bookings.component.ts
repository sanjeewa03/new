import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  model:any;
  clicked:boolean=false;
  constructor() { }
  

  ngOnInit() {
    
    this.model=
    [
     { Name:'anjana',
       Check_In:'2019/08/05',
       Check_Out:'2019/09/04',
       Payment:'paid',
       Phone:'0714578412',
       Room_Type:'AC' 
     },

     { Name:'Hasini',
     Check_In:'2019/08/05',
     Check_Out:'2019/09/04',
     Payment:'Unpaid',
     Phone:'0714578412',
     Room_Type:'NonAC' 
   },

   { Name:'Nevil',
   Check_In:'2019/08/05',
   Check_Out:'2019/09/04',
   Payment:'Unpaid',
   Phone:'0714578412',
   Room_Type:'NonAC' 
 },
 { Name:'Saman',
   Check_In:'2019/08/05',
   Check_Out:'2019/09/04',
   Payment:'Unpaid',
   Phone:'0714578412',
   Room_Type:'NonAC' 
 }

    ]


  }

}
