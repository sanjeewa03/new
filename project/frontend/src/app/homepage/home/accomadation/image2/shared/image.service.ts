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
    {"id":1,"category":"economical","header":"Chill Ville Hotel","title":"","review":"#3 of 256 Specialty Lodging in Ella","address":"Passara Road | 6th Mile Post, Ella 90090, Sri Lanka","price":"LKR 50250","url":"assets/img/accomadation/hotel/1.jpg", "width":"100%","url1":"assets/img/accomadation/hotel/image1.jpg","url2":"assets/img/accomadation/hotel/image2.jpg","url3":"assets/img/accomadation/hotel/image3.jpg","url4":"assets/img/accomadation/hotel/image32.jpg","url5":"assets/img/accomadation/hotel/image42.jpg"},
    {"id":2,"category":"luxury","header":"Anantara Peace Haven Tangalle Resort","title":"","review":"#2 of 36 Hotels in Tangalle","address":"Goyambokka, Tangalle 82200, Sri Lanka","price":"LKR 59,632","url":"assets/img/accomadation/hotel/2.jpg","url1":"assets/img/accomadation/hotel/image4.jpg","url2":"assets/img/accomadation/hotel/image5.jpg","url3":"assets/img/accomadation/hotel/image6.jpg","url4":"assets/img/accomadation/hotel/image33.jpg","url5":"assets/img/accomadation/hotel/image43.jpg"},
    {"id":3,"category":"reasonable","header":"Taj Bentota Resort & Spa","title":"","review":"#7 of 28 Hotels in Bentota","address":"Bentota 80500, Sri Lanka","price":"LKR 12,025","url":"assets/img/accomadation/hotel/3.jpg","url1":"assets/img/accomadation/hotel/image7.jpg","url2":"assets/img/accomadation/hotel/image8.jpg","url3":"assets/img/accomadation/hotel/image9.jpg","url4":"assets/img/accomadation/hotel/image34.jpg","url5":"assets/img/accomadation/hotel/image44.jpg"},
    {"id":4,"category":"economical","header":"Apa Villa Thalpe","title":"","review":"#10 of 45 Hotels in Unawatuna","address":"78 Mile Post Matara Road Mihiripenna, Unawatuna 80600, Sri Lanka","price":"LKR 11250","url":"assets/img/accomadation/hotel/4.jpg","url1":"assets/img/accomadation/hotel/image10.jpg","url2":"assets/img/accomadation/hotel/image11.jpg","url3":"assets/img/accomadation/hotel/image12.jpg","url4":"assets/img/accomadation/hotel/image35.jpg","url5":"assets/img/accomadation/hotel/image45.jpg"},
    {"id":5,"category":"luxury","header":"Mount Lavinia Hotel","title":"","review":"#1 of 16 Hotels in Dehiwala-Mount Lavinia","address":"No. 100 Hotel Road, Dehiwala-Mount Lavinia 10350, Sri Lanka","price":"LKR 15950","url":"assets/img/accomadation/hotel/5.jpg","url1":"assets/img/accomadation/hotel/image14.jpg","url2":"assets/img/accomadation/hotel/image15.jpg","url3":"assets/img/accomadation/hotel/image16.jpg","url4":"assets/img/accomadation/hotel/image36.jpg","url5":"assets/img/accomadation/hotel/image46.jpg"},
    {"id":6,"category":"reasonable","header":"Underneath The Mango Tree by Jetwing","title":"","review":"#4 of 88 Hotels in Negombo","address":"Pamunugama Road, Thalahena, Negombo 11500, Sri Lanka","price":"LKR 30500","url":"assets/img/accomadation/hotel/6.jpg","url1":"assets/img/accomadation/hotel/image17.jpg","url2":"assets/img/accomadation/hotel/image18.jpg","url3":"assets/img/accomadation/hotel/image19.jpg","url4":"assets/img/accomadation/hotel/image37.jpg","url5":"assets/img/accomadation/hotel/image47.jpg"},
    {"id":7,"category":"reasonable","header":"Apa Villa Illuketia","title":"","review":"#20 of 49 Hotels in Galle","address":"Illuketia Watta | Wanchawala, Galle 80000, Sri Lanka","price":"LKR 9,297","url":"assets/img/accomadation/hotel/7.jpg","url1":"assets/img/accomadation/hotel/image20.jpg","url2":"assets/img/accomadation/hotel/image21.jpg","url3":"assets/img/accomadation/hotel/image22.jpg","url4":"assets/img/accomadation/hotel/image38.jpg","url5":"assets/img/accomadation/hotel/image48.jpg"},
    {"id":8,"category":"economical","header":"Laya Safari","title":"","review":"#26 Best Value of 44 Exclusive Resorts in Sri Lanka","address":"Passara Road | 6th Mile Post, Ella 90090, Sri Lanka","price":"LKR 18250","url":"assets/img/accomadation/hotel/8.jpg","url1":"assets/img/accomadation/hotel/image23.jpg","url2":"assets/img/accomadation/hotel/image24.jpg","url3":"assets/img/accomadation/hotel/image25.jpg","url4":"assets/img/accomadation/hotel/image39.jpg","url5":"assets/img/accomadation/hotel/image49.jpg"},
    {"id":9,"category":"luxury","header":"Margosa Bay","title":"","review":"#13 of 129 B&Bs / Inns in Trincomalee","address":"810/10 3rd Mile Post, Trincomalee 31000, Sri Lanka","price":"LKR 31,832","url":"assets/img/accomadation/hotel/9.jpg","url1":"assets/img/accomadation/hotel/image26.jpg","url2":"assets/img/accomadation/hotel/image27.jpg","url3":"assets/img/accomadation/hotel/image28.jpg","url4":"assets/img/accomadation/hotel/image40.jpg","url5":"assets/img/accomadation/hotel/image50.jpg"},
    {"id":10,"category":"economical","header":"CoCoBay Unawatuna","title":"","review":"#4 of 45 Hotels in Unawatuna","address":"#25 Best Value of 44 Exclusive Resorts in Sri Lanka","price":"LKR 20250","url":"assets/img/accomadation/hotel/10.jpg","url1":"assets/img/accomadation/hotel/image29.jpg","url2":"assets/img/accomadation/hotel/image30.jpg","url3":"assets/img/accomadation/hotel/image31.jpg","url4":"assets/img/accomadation/hotel/image41.jpg","url5":"assets/img/accomadation/hotel/image51.jpg"},


]