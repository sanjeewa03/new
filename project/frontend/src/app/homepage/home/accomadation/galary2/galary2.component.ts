import { Component, OnChanges, Input } from '@angular/core';
import { ImageService } from '../image2/shared/image.service';
import { filter } from 'rxjs-compat/operator/filter';


@Component({
    selector:'app-galary2',
    templateUrl:'./galary2.component.html',
    styleUrls: ['./galary2.component.css'],
    providers: [ImageService]
})

export class Galary2Component implements OnChanges{
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
