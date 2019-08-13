import {Injectable } from '@angular/core';

@Injectable()
export class ImageService{
    visibleImages=[];
    getImages(){
        return this.visibleImages=IMAGES.slice(0);
    }
    
    getImage(id: number){
        return IMAGES.slice(0).find(image2 =>image2.id == id)
    }
    exploreImage1(){
        return this.visibleImages=IMAGES.slice(0,5);
    }
    exploreImage2(){
        return this.visibleImages=IMAGES.slice(5,15);
    }
}

const IMAGES=[
    {"id":1,"category":"economical","header":"Chill Ville Hotel","title":"","review":"#3 of 256 Specialty Lodging in Ella","address":"Passara Road | 6th Mile Post, Ella 90090, Sri Lanka","url":"assets/img/accomadation/hotel/4.jpg","url1":"assets/img/accomadation/hotel/image.jpg","url2":"assets/img/accomadation/hotel/image2.jpg","url3":"assets/img/accomadation/hotel/image3.jpg","url4":"assets/img/accomadation/hotel/image4.jpg"},
    {"id":2,"category":"economical","header":"Chill Ville Hotel","title":"","review":"#3 of 256 Specialty Lodging in Ella","address":"Passara Road | 6th Mile Post, Ella 90090, Sri Lanka","url":"assets/img/accomadation/hotel/4.jpg","url1":"assets/img/accomadation/hotel/image.jpg","url2":"assets/img/accomadation/hotel/image.jpg","url3":"assets/img/accomadation/hotel/image.jpg","url4":"assets/img/accomadation/hotel/image.jpg"},
    {"id":3,"category":"economical","header":"Chill Ville Hotel","title":"","review":"#3 of 256 Specialty Lodging in Ella","address":"Passara Road | 6th Mile Post, Ella 90090, Sri Lanka","url":"assets/img/accomadation/hotel/4.jpg","url1":"assets/img/accomadation/hotel/image.jpg","url2":"assets/img/accomadation/hotel/image.jpg","url3":"assets/img/accomadation/hotel/image.jpg","url4":"assets/img/accomadation/hotel/image.jpg"},
    {"id":4,"category":"economical","header":"Chill Ville Hotel","title":"","review":"#3 of 256 Specialty Lodging in Ella","address":"Passara Road | 6th Mile Post, Ella 90090, Sri Lanka","url":"assets/img/accomadation/hotel/4.jpg","url1":"assets/img/accomadation/hotel/image.jpg","url2":"assets/img/accomadation/hotel/image.jpg","url3":"assets/img/accomadation/hotel/image.jpg","url4":"assets/img/accomadation/hotel/image.jpg"},
    {"id":5,"category":"economical","header":"Chill Ville Hotel","title":"","review":"#3 of 256 Specialty Lodging in Ella","address":"Passara Road | 6th Mile Post, Ella 90090, Sri Lanka","url":"assets/img/accomadation/hotel/4.jpg","url1":"assets/img/accomadation/hotel/image.jpg","url2":"assets/img/accomadation/hotel/image.jpg","url3":"assets/img/accomadation/hotel/image.jpg","url4":"assets/img/accomadation/hotel/image.jpg"},
    {"id":6,"category":"economical","header":"Chill Ville Hotel","title":"","review":"#3 of 256 Specialty Lodging in Ella","address":"Passara Road | 6th Mile Post, Ella 90090, Sri Lanka","url":"assets/img/accomadation/hotel/4.jpg","url1":"assets/img/accomadation/hotel/image.jpg","url2":"assets/img/accomadation/hotel/image.jpg","url3":"assets/img/accomadation/hotel/image.jpg","url4":"assets/img/accomadation/hotel/image.jpg"},
    {"id":7,"category":"economical","header":"Chill Ville Hotel","title":"","review":"#3 of 256 Specialty Lodging in Ella","address":"Passara Road | 6th Mile Post, Ella 90090, Sri Lanka","url":"assets/img/accomadation/hotel/4.jpg","url1":"assets/img/accomadation/hotel/image.jpg","url2":"assets/img/accomadation/hotel/image.jpg","url3":"assets/img/accomadation/hotel/image.jpg","url4":"assets/img/accomadation/hotel/image.jpg"},
    {"id":8,"category":"economical","header":"Chill Ville Hotel","title":"","review":"#3 of 256 Specialty Lodging in Ella","address":"Passara Road | 6th Mile Post, Ella 90090, Sri Lanka","url":"assets/img/accomadation/hotel/4.jpg","url1":"assets/img/accomadation/hotel/image.jpg","url2":"assets/img/accomadation/hotel/image.jpg","url3":"assets/img/accomadation/hotel/image.jpg","url4":"assets/img/accomadation/hotel/image.jpg"},
    {"id":9,"category":"economical","header":"Chill Ville Hotel","title":"","review":"#3 of 256 Specialty Lodging in Ella","address":"Passara Road | 6th Mile Post, Ella 90090, Sri Lanka","url":"assets/img/accomadation/hotel/4.jpg","url1":"assets/img/accomadation/hotel/image.jpg","url2":"assets/img/accomadation/hotel/image.jpg","url3":"assets/img/accomadation/hotel/image.jpg","url4":"assets/img/accomadation/hotel/image.jpg"},
    {"id":10,"category":"economical","header":"Chill Ville Hotel","title":"","review":"#3 of 256 Specialty Lodging in Ella","address":"Passara Road | 6th Mile Post, Ella 90090, Sri Lanka","url":"assets/img/accomadation/hotel/4.jpg","url1":"assets/img/accomadation/hotel/image.jpg","url2":"assets/img/accomadation/hotel/image.jpg","url3":"assets/img/accomadation/hotel/image.jpg","url4":"assets/img/accomadation/hotel/image.jpg"},


]