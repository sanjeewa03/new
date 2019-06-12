import { Component, OnInit } from '@angular/core';
import {PackageService } from '../../../../../shared/package/package.service';


import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-package-add',
  templateUrl: './package-add.component.html',
  styleUrls: ['./package-add.component.css'],
  providers: [PackageService]
})
export class PackagesAddComponent implements OnInit {

  constructor(private packageService: PackageService, public router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log(form.value);
    this.packageService.addPackage(form.value).subscribe(
      res => {
        console.log(res);
      });
        form.reset();
        

      }
      


}
