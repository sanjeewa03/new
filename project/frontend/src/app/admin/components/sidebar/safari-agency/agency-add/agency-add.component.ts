import { Component, OnInit } from '@angular/core';
import { SafariService } from '../../../../../shared/safari/safari.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Safari } from '../../../../../shared/safari/safari.model';


@Component({
  selector: 'app-agency-add',
  templateUrl: './agency-add.component.html',
  styleUrls: ['./agency-add.component.css'],
  providers: [SafariService]
})
export class AgencyAddComponent implements OnInit {

  constructor(private safariService: SafariService, public router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log(form.value)
    this.safariService.addAgency(form.value).subscribe(
      res => {
        console.log(res);
        form.reset();

      }
      
    );

  }


}
