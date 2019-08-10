import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css',
  
]
})


export class NavComponent implements OnInit {
  private fragment: string;
  private isLogedIn = "";
  private logedIn = false;

  constructor(private route: ActivatedRoute,public router: Router) {}

  ngOnInit() {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
    this.isLogedIn = localStorage.getItem('isLogedIn');
    if(this.isLogedIn=="true"){
      this.logedIn=true;
    }
    else{
      this.logedIn=false;
    }
  }

  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) {
      console.log(e);
    }

}
onSubmit(form: NgForm){
  this.router.navigate(['home']);
  localStorage.clear();
}
}
