import { Component, OnInit } from '@angular/core';
import { TouristService } from '../../../../../shared/tourist/tourist.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Tourist } from '../../../../../shared/tourist/tourist.model';

@Component({
  selector: 'app-tourist-add',
  templateUrl: './tourist-add.component.html',
  styleUrls: ['./tourist-add.component.css'],
  providers: [TouristService]
})
export class TouristAddComponent implements OnInit {

   constructor(private touristService: TouristService, public router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log(form.value)
    this.touristService.addTourist(form.value).subscribe(
      res => {
        console.log(res);
        form.reset();
        

      }
      
    );

  }
}
