import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( public router: Router) { }

  ngOnInit() {
  }

  onClickMe() {
    localStorage.clear();
    this.router.navigate(['home']);
    
  }
}
