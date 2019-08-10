import { Component, OnInit } from '@angular/core';

import { UserSigninService } from '../../shared/user/user-signin.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [UserSigninService]
})
export class SignInComponent implements OnInit {


  showSucessMessage: boolean;

  constructor(private userSigninService: UserSigninService, public router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.userSigninService.postUser(form.value).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('time', String(Date.now()) );
        localStorage.setItem('isLogedIn', "true");
        if(res){
          if(res.role){
            if(res.role=="Admin"){
              this.router.navigate(['/admin']);
              console.log("admin");
            }
            else if(res.role=='User'){
              this.router.navigate(['/tourist']);
              console.log("tourist");
            }
          }
          this.showSucessMessage = true;
          setTimeout(()=> this.showSucessMessage = false, 4000);
        }
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
