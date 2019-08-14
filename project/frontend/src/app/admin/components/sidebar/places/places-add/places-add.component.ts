import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-places-add',
  templateUrl: './places-add.component.html',
  styleUrls: ['./places-add.component.css']
})
export class PlacesAddComponent implements OnInit {
  ngOnInit(): void {
  }

  selectedFile: File = null;
  fd = new FormData();

  constructor(private http: HttpClient) {}

  createFormData(event) {
    this.selectedFile = <File>event.target.files[0];
    this.fd.append('productImage', this.selectedFile, this.selectedFile.name);
  }

  upload() {
    this.http.post('http://localhost:4000/image', this.fd)
    .subscribe( result => {
      console.log(result)
    });
  }

}
