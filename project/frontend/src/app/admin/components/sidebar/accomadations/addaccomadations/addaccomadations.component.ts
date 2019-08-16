import { Component, OnInit } from '@angular/core';
import {AccomadationService } from '../../../../../shared/accomadation/accomadation.service';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addaccomadations',
  templateUrl: './addaccomadations.component.html',
  styleUrls: ['./addaccomadations.component.css'],
  providers: [AccomadationService ]
})
export class AddaccomadationsComponent implements OnInit {

  constructor(private accomadationService: AccomadationService , public router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log(form.value);
    this. accomadationService.addAccomadation(form.value).subscribe(
      res => {
        console.log(res);
      });
        form.reset();
        

      }
      
}

