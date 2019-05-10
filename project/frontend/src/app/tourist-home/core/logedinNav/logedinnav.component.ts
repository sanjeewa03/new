import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logedinnav',
  templateUrl: './logedinnav.component.html',
  styleUrls: ['./logedinnav.component.css',
  
]
})


export class LogedInNavComponent implements OnInit {

  constructor( public router: Router) { }

  ngOnInit() {}

  onSubmit(form: NgForm){
    this.router.navigate(['home']);
    localStorage.clear();
  }

}
