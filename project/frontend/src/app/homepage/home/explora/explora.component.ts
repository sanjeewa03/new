import { Component, OnChanges, OnInit, Input } from '@angular/core';
import { ImageService } from '../tourplane/image/shared/image.service';
import { filter } from 'rxjs-compat/operator/filter';


@Component({
  selector: 'app-explora',
  templateUrl: './explora.component.html',
  styleUrls: ['./explora.component.css'],
  providers: [ImageService]
})
export class ExploraComponent implements OnChanges{
  title='Recent photoes'
  @Input() filterBy?: string='all'
  visibleImages1: any[] = [];
  visibleImages2: any[] = [];


constructor(private imageService: ImageService){
  this.visibleImages1 = this.imageService.exploreImage1();
  this.visibleImages2 = this.imageService.exploreImage2();
}

ngOnChanges(){
  this.visibleImages1= this.imageService.exploreImage1();
  this.visibleImages2= this.imageService.exploreImage2();
}


}
