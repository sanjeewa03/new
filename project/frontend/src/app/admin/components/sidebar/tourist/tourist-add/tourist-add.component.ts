import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../../shared/user/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Tourist } from '../../../../../shared/tourist/tourist.model';

@Component({
  selector: 'app-tourist-add',
  templateUrl: './tourist-add.component.html',
  styleUrls: ['./tourist-add.component.css'],
  providers: [UserService]
})
export class TouristAddComponent implements OnInit {

   constructor(private userService: UserService, public router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log(form.value);
    this.userService.postUser(form.value).subscribe(
      res => {
        console.log(res);
        this.userService.addTourist(form.value).subscribe(res=>{
        });
        form.reset();
        

      }
      
    );

  }
}
