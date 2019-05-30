import {Injectable } from '@angular/core';

@Injectable()
export class ImageService{
    visibleImages=[];
    getImages(){
        return this.visibleImages=IMAGES.slice(0);
    }
    
    getImage(id: number){
        return IMAGES.slice(0).find(image =>image.id == id)
    }
}

const IMAGES=[
    {"id":1,"category":"galle","caption":"View from a boat Our Driver Guide will be your hotel lobby at 07:00 a.m. Pick up from the hotel and proceed to Peradeniya with by, air-conditioned vehicle. Our First visit Peradeniya Botanical Garden","url":"assets/img/1.jpg"},
    {"id":2,"category":"galle","caption":"View from a boat","url":"assets/img/2.jpg"},
    {"id":3,"category":"galle","caption":"View from a boat","url":"assets/img/3.jpg"},
    {"id":4,"category":"matara","caption":"View from a boat","url":"assets/img/4.jpg"},
    {"id":5,"category":"matara","caption":"View from a boat","url":"assets/img/5.jpg"},
    {"id":6,"category":"matara","caption":"View from a boat","url":"assets/img/6.jpg"},
    {"id":7,"category":"colombo","caption":"View from a boat","url":"assets/img/7.jpg"},
    {"id":8,"category":"colombo","caption":"View from a boat","url":"assets/img/8.jpg"},
    {"id":9,"category":"colombo","caption":"View from a boat","url":"assets/img/9.jpg"},
    {"id":10,"category":"colombo","caption":"View from a boat","url":"assets/img/10.jpg"}


]
