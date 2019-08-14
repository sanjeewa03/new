import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../../../../shared/place/place.service';
import { Router,ActivatedRoute } from '@angular/router';


export interface dataInterface {
    id:number;
    category:string;
    header:string;
    title:string;
    caption:string;
    url:string;
    url1:string;
    url2:string;
    url3:string;
    url4:string;
    url5:string;
    url6:string;
    url7:string;
    url8:string;
}

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  data: dataInterface[];
  displayedColumns: string[] = ["id","category","title","caption","url"/*,"url1","url2","url3","url4","url5","url6","url7","url8"*/];
  dataSource = this.placeService.getAll();
  

  constructor(private placeService: PlaceService, public router: Router,private route: ActivatedRoute) {
    
  }
  
  ngOnInit() {
    this.placeService.getAll();
    console.log(this.data);
  }


}
