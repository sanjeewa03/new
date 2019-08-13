import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image1/shared/image.service';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import * as Immutable from 'immutable';
@Component({
    selector:'image1',
    templateUrl:'./image1.component.html',
    styleUrls: ['./image1.component.css'],
    providers: [ImageService]

})

export class Image1Component  implements OnInit {
    image:any

    constructor(private imageService: ImageService ,private route:ActivatedRoute){}

    ngOnInit(){
        this.image= this.imageService.getImage(
            +this.route.snapshot.params['id']
        )

    }
}
