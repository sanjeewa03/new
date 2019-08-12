import { Component, OnChanges, Input } from '@angular/core';
import { ImageService } from '../image1/shared/image.service';
import { filter } from 'rxjs-compat/operator/filter';


@Component({
    selector:'app-galary1',
    templateUrl:'./galary1.component.html',
    styleUrls: ['./galary1.component.css'],
    providers: [ImageService]
})

export class Galary1Component implements OnChanges{
    title='Recent photoes'
    @Input() filterBy?: string='all'
    visibleImages: any[] = [];


constructor(private imageService: ImageService){
    this.visibleImages = this.imageService.getImages();
}

ngOnChanges(){
    this.visibleImages= this.imageService.getImages();
}


}
