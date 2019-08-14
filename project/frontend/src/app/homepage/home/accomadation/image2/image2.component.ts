import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image2/shared/image.service';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';

@Component({
    selector:'image2',
    templateUrl:'./image2.component.html',
    styleUrls: ['./image2.component.css'],
    providers: [ImageService]

})

export class Image2Component  implements OnInit {
    image:any
    id:string;
    acc:string="acc";

    constructor(private imageService: ImageService ,private route:ActivatedRoute){}

    ngOnInit(){
        this.image= this.imageService.getImage(
            +this.route.snapshot.params['id']
        );
        this.id=this.route.snapshot.params['id'];

    }
}
