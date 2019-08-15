import { Component, OnInit } from '@angular/core';

import { UserService } from '../../../shared/user/user.service';
import { UserSigninService } from '../../../shared/user/user-signin.service';
import { TouristService } from '../../../shared/tourist/tourist.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../shared/user/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [UserService]
})
export class SignUpComponent implements OnInit {

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;

  constructor(private userService: UserService,private userSigninService: UserSigninService, public router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.userService.postUser(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        this.userService.addTourist(form.value).subscribe(res=>{
        });
        
        this.userSigninService.postUser(form.value).subscribe(
          res => {
            if(res.role=="Admin"){
              this.router.navigate(['/admin']);
              console.log("admin");
            }
            else if(res.role=='User'){
              this.router.navigate(['']);
              console.log("user");
            }
          }
        );

        setTimeout(()=> this.showSucessMessage = false, 4000);
      },
      //\err => {
        /*if(err.status==422){
          this.serverErrorMessages = err.error.join('/br');
        }
        else{
          this.serverErrorMessages = 'Something went wrong. Please contact admin. ';
        }*/
      //};
    );

  }

}
