import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places-add',
  templateUrl: './places-add.component.html',
  styleUrls: ['./places-add.component.css']
})
export class PlacesAddComponent implements OnInit {

  constructor() { }
  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png",
    maxSize: "1",
    uploadAPI:  {
      url:"http://localhost:4000/image/",
      headers: {
     "Content-Type" : "text/plain;charset=UTF-8",
     "Authorization" : `Bearer ${localStorage.getItem('token')}`
      }
    },
    theme: "dragNDrop",
    hideProgressBar: true,
    hideResetBtn: false,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Attach Files...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !'
    }
};

  ngOnInit() {
  }

}
