import { Component, OnChanges, Input } from '@angular/core';
import { ImageService } from '../image/shared/image.service';
import { filter } from 'rxjs-compat/operator/filter';


@Component({
    selector:'app-gallery',
    templateUrl:'./gallery.component.html',
    styleUrls: ['./gallery.component.css'],
    providers: [ImageService]
})

export class GalleryComponent implements OnChanges{
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
