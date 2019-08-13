import {Injectable } from '@angular/core';

@Injectable()
export class ImageService{
    visibleImages=[];
    getImages(){
        return this.visibleImages=IMAGES.slice(0);
    }
    
    getImage(id: number){
        return IMAGES.slice(0).find(image1 =>image1.id == id)
    }
    exploreImage1(){
        return this.visibleImages=IMAGES.slice(0,5);
    }
    exploreImage2(){
        return this.visibleImages=IMAGES.slice(5,10);
    }
}

const IMAGES=[
    {"id":1,"category":"Travel agency","header":"SriLanka Best Safari Travels","title":"SriLanka Best Safari","review":"","address":"Colombo Sri Lanka","phone":"+9477488036","email":"safaribest@gmail.com","url":"assets/img/travel/1.jpg","title2":"About","caption":"Sri Lanka Day Tours. We are a highly skilled team offering various kinds of tours in Sri Lanka. Mainly we operate from Colombo/ Airport to the following destinations. Galle Day Tour Colombo City Tour Kandy City Tour In addition to the above we do make special tours for wild life, Adventure Sports , Hiking Sigiriya / Dambulla Day Tour (10-12 Hours)","url1":"assets/img/safariuploads/image2.jpg","url2":"assets/img/safariuploads/image3.jpg","url3":"assets/img/safariuploads/image4.jpg","url4":"assets/img/safariuploads/image5.jpg",},
    {"id":2,"category":"Travel agency","header":"MaduQueen Boat Safari", "title":"MaduQueen Boat Safari","title2":"About","review":"","address":"Mathara Sri Lanka","phone":"+94-773-524-876 ","email":"maduboat@gmail.com","caption":"This one-hour tour takes you on a boat safari through the primitive depths of the mangrove marshes in Madu River. Traverse the dark and dangerous caverns formed by the thick mangrove forests; interspersed with bright open stretches of water. Learn more about mangroves and their positive effect on ecology. Get a chance to see crocodiles, water snakes, tree snakes and wild boars in their natural habitat. Watch the cormorants; storks and many other avianlife hunt for their prey in swift flow of Madu River. View the pots for catching prawn and shrimp left in some of the shallower areas of the river. Visit the old Buddhist temple on one of the islands that dot the river liberally. Stop by another of the islands; which are the source of the cinnamon industry of Sri Lanka. Purchase some fresh, high quality cinnamon to take home as a souvenir. Make sure to visit the outdoor fish massage parlor, where you can dangle your feet into a fenced part of the river to get treated by the massage fish. You will have to pay for your ticket for the fish massage parlor as it isn't included in your tour package. .","url":"assets/img/travel/2.jpg","url1":"assets/img/safariuploads/image6.jpg","url2":"assets/img/safariuploads/image7.jpg","url3":"assets/img/safariuploads/image8.jpg","url4":"assets/img/safariuploads/image9.jpg"},
    {"id":3,"category":"Travel agency","header":"Udawalawa Safari", "title":"Udawalawa Safari","title2":"About","caption":"Udawalawa national park is one of the most undisturbed and pristine natural ecosystems on the planet enriched with a wealth of Sri Lankan elephants.Ella in Sri Lanka is a small laid-back town surrounded by the beautiful greens of tea. There are a lot of things to do in Ella.","review":"","address":"Udawalawa Sri Lanka","phone":"+9477488036","email":"safaribest@gmail.com","url":"assets/img/travel/3.jpg","url1":"assets/img/safariuploads/image10.jpg","url2":"assets/img/safariuploads/image11.jpg","url3":"assets/img/safariuploads/image12.jpg","url4":"assets/img/safariuploads/image13.jpg"},
    {"id":4,"category":"Travel agency","header":"Blue Lanka Tours", "title":"Blue Lanka Tours","title2":"About","review":"","address":"Colombo Sri Lanka","phone":"+94-773-524-876 ","email":"toursl@gmail.com","caption":"Our team of expert travel consultants have selected a few from our wide range of themed tour itineraries that we believe will offer you an unforgettable holiday in Sri Lanka. For those who have different holiday preferences in Sri Lanka, we cater to tailor-made itineraries as per your requests. So do not hesitate to let us know if you need a special itinerary made just for you.","url":"assets/img/travel/4.jpg","url1":"assets/img/safarisafariuploads/image14.jpg","url2":"assets/img/safariuploads/image15.jpg","url3":"assets/img/safariuploads/image16.jpg","url4":"assets/img/safariuploads/image17.jpg"},
    {"id":5,"category":"Travel agency","header":"Aruna Lanka Tours","title":"Aruna Lanka Tours","title2":"About","review":"","address":"Colombo Sri Lanka","phone":"+9477488036","email":"safaribest@gmail.com","caption":"Aruna Lanka Tours- A part of Sri Lanka based premier travel group and leading tour operator. It’s the first & only holiday brand in the country that exclusively cater to the unique holiday needs of every traveler from budget to premium range. We offer the complete range of services associated with vacationing Sri Lankan tours and travels. Our core focus is leisure travel and destination management...","url":"assets/img/travel/5.jpg","url1":"assets/img/safariuploads/image18.jpg","url2":"assets/img/safariuploads/image19.jpg","url3":"assets/img/safariuploads/image20.jpg","url4":"assets/img/safariuploads/image21.jpg"},
    {"id":6,"category":"Travel agency","header":"Mihin Safari", "title":"Mihin Safari","review":"","title2":"About","address":"Udawalawa Sri Lanka","phone":"+9477488036","email":"safaribest@gmail.com","caption":"We requested our guide by choice, Shameera from Mihin Safari, and he was excellent. Very experienced, put us in the best possible position to see crocodiles, buffalo, elephants, birdlife, even two mongoose. Shameera was able to take us to the very rare dwarf elephant, there is only one left in Asia, which was in the park due to mating season. An excellent day, make sure you ask for Shameera.","url":"assets/img/travel/6.jpg","url1":"assets/img/safariuploads/image22.jpg","url2":"assets/img/safariuploads/image23.jpg","url3":"assets/img/safariuploads/image24.jpg","url4":"assets/img/safariuploads/image25.jpg"},
    {"id":7,"category":"Travel agency","header":"Paradise Safari Travel", "title":"Paradise Safari Travel","title2":"About","review":"","address":"Colombo Sri Lanka","phone":"+9477488036","email":"safaribest@gmail.com","caption":"Nature Paradise Travels Sri Lanka We are the Best tour operators in Sri Lanka who handling the budget tour & Holiday packages. We are managing Sri Lanka tours and providing budget vehicles.'You will surely treasure some of the fond memories of this beach. Get into the adventurous mood by trying snorkelling and diving. If you are not too fond of adventures you can sit by the beach and enjoy the sight of the mighty waves. ","url":"assets/img/travel/7.jpg","url1":"assets/img/safariuploads/image26.jpg","url2":"assets/img/safariuploads/image27.jpg","url3":"assets/img/safariuploads/image28.jpg","url4":"assets/img/safariuploads/image29.jpg"},
    {"id":8,"category":"Travel agency","header":"Yala Safari", "title":"Yala Safari","title2":"About","review":"","address":"Yala Sri Lanka","phone":"+9477488036","email":"safaribest@gmail.com","caption":"We are the #1 leading company in organizing yala and Bundala safaris. We have well experienced drivers and guides. Also we are doing safaris from well maintained jeeps. Our target is showing the everything for you inside the park during the safari time. ","url":"assets/img/travel/8.jpg","url1":"assets/img/safariuploads/image30.jpg","url2":"assets/img/safariuploads/image31.jpg","url3":"assets/img/safariuploads/image32.jpg","url4":"assets/img/safariuploads/image33.jpg"},
    {"id":9,"category":"Travel agency", "header":"Nature paradise Travels","title":"Nature paradise Travels","title2":"About","review":"","address":"Colombo Sri Lanka","phone":"+94-773-524-876 ","email":"safaribest@gmail.com","caption":"Nature Paradise Travels Sri Lanka We are the Best tour operators in Sri Lanka who handling the budget tour & Holiday packages. We are managing Sri Lanka tours and providing budget vehicles.'","url":"assets/img/travel/9.jpg","url1":"assets/img/safariuploads/image34.jpg","url2":"assets/img/safariuploads/image35.jpg","url3":"assets/img/safariuploads/image36.jpg","url4":"assets/img/safariuploads/image37.jpg"},
    {"id":10,"category":"Travel agency", "header":"VTS Lanka Tours","title":"VTS Lanka Tours","title2":"About","review":"","address":"Colombo Sri Lanka","phone":"+9477488036","email":"vts@gmail.com","caption":"'VTS Lanka Tours is Based in Bentota. Sri Lanka. We Arrange Airport Transfers, Day Trips, Boat Safari and Round Trips for Incoming tourist to Sri Lanka.'","url":"assets/img/travel/10.jpg","url1":"assets/img/safariuploads/image38.jpg","url2":"assets/img/safariuploads/image39.jpg","url3":"assets/img/safariuploads/image40.jpg","url4":"assets/img/safariuploads/image41.jpg"}


]