import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../../shared/message/message.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [MessageService]
})
export class ContactComponent implements OnInit {

 constructor(private messageService: MessageService, public router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log(form.value)
    this.messageService.addMessage(form.value).subscribe(
      res => {
        form.reset();
        

      }
      
    );

  }
}
