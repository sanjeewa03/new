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
    {"id":1,"category":"galle","header":"","title":"Up country","caption":"View from a boat Our Driver Guide will be your hotel lobby at 07:00 a.m. Pick up from the hotel and proceed to Peradeniya with by, air-conditioned vehicle. Our First visit Peradeniya Botanical Garden","url":"assets/img/1.jpg",},
    {"id":2,"category":"galle","header":" ", "title":"Waterfalls in Sri Lanka","caption":"After breakfast at the hotel, check out and proceed to Nuwara Eliya. En-route Visit Ramboda Waterfalls Tea Plantation and Factory Nuwara-Eliya city tour : Gregory Lake, Nuwara-Eliya town :Over night stay at a selected Hotel in Nuwara Eliya.","url":"assets/img/2.jpg"},
    {"id":3,"category":"galle","header":"", "title":"Pinnawala and sanctuaries","caption":" Pinnawala Elephant Orphanage, Millennium Elephant Foundation, Dambulla Cave Temple","url":"assets/img/3.jpg"},
    {"id":4,"category":"matara","header":"", "title":"Ella Sri Lanka","caption":"We do the city tour in the morning then make a scenic train trip to ella. Ella train trip through beautiful scenery including waterfalls, tea plantations and vegetable gardens.Little Adam's peak.Nine Arch Bridge.Ella Rock & Lipton’s Seat.Over night stay at a selected Hotel in Ella.","url":"assets/img/4.jpg"},
    {"id":5,"category":"matara","header":"","title":"Tea estates","caption":"Visit a tea plantation to find out all about Sri Lanka's 150-year-old tea industry – and find the best brew on the island.As the birthplace of Ceylon Tea, Kandy is also referred to as the hill capital and belongs to the Central Province of the Island. Tea in this region is grown along the surrounding hills covering an elevation of 2,000-4,000ft. ","url":"assets/img/5.jpg"},
    {"id":6,"category":"matara","header":"", "title":"Sigiriya and Heritages","caption":"Climb Sigiriya Rock.Sigiriya Village Tour with bullock cart ride into the village & catamaran ride on the lake.Jeep safari to Minneriya National Park","url":"assets/img/6.jpg"},
    {"id":7,"category":"colombo","header":"", "title":"Down south","caption":"You will surely treasure some of the fond memories of this beach. Get into the adventurous mood by trying snorkelling and diving. If you are not too fond of adventures you can sit by the beach and enjoy the sight of the mighty waves. ","url":"assets/img/7.jpg"},
    {"id":8,"category":"colombo","header":"", "title":"Galle Fort","caption":"You can only enter Galle Fort from the main gate side. From there, explore the shopping streets, churches, and the fort’s history. It takes about two hours to walk around the whole fort. To avoid busy streets, make sure to visit Galle Fort in the morning. Still, we like to recommend an afternoon walk so you aren’t going to miss the sunset.","url":"assets/img/8.jpg"},
    {"id":9,"category":"colombo", "header":"","title":"Ancient Anuradhapura","caption":"Anuradhapura was the cradle of glorious Sinhalese Buddhist civilization. The pride of place in Anuradhapura was taken by the ancient stupas and ancient reservoirs. Towering stupas (dagobas) of stupendous domes, the marvels of ancient civil engineering, were built having taken into the account the effects of lightening on high rise constructions, among numerous other engineering factors","url":"assets/img/9.jpg"},
    {"id":10,"category":"colombo", "header":"","title":"Jaffna North City","caption":"Jaffna is a city on the northern tip of Sri Lanka. Nallur Kandaswamy is a huge Hindu temple with golden arches and an ornate gopuram tower. By the coast, star-shaped Jaffna Fort was built by the Portuguese in the 17th century and later occupied by the Dutch and British","url":"assets/img/10.jpg"}


]
