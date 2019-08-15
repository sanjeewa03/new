import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { MatFileUploadModule } from 'angular-material-fileupload';
import { MatButtonModule } from '@angular/material';
import '@angular/material/prebuilt-themes/deeppurple-amber.css';

import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/userroles/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomeComponent } from './homepage/home/home.component';
import { NavComponent } from './homepage/core/nav/nav.component';
import { FooterComponent } from './homepage/home/footer/footer.component';
import { ContactComponent } from './homepage/home/contact/contact.component';
import { HeaderComponent } from './homepage/core/components/header/header.component';
import { BannerComponent } from './homepage/home/banner/banner.component';
import { ExploraComponent } from './homepage/home/explora/explora.component';
import { SafariComponent } from './homepage/home/safari/safari.component';
import { AboutComponent } from './homepage/home/about/about.component';
import { PackageComponent } from './homepage/home/package/package.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ComponentsComponent } from './admin/components/components.component';
import { SidebarComponent } from './admin/components/sidebar/sidebar.component';
import { NavbarComponent } from './admin/components/navbar/navbar.component';
import { BreadcrumbComponent } from './admin/components/breadcrumb/breadcrumb.component';
import { TouristHomeComponent } from './tourist-home/tourist-home.component';
import { LogedInNavComponent } from './tourist-home/core/logedinNav/logedinnav.component';
import { HotelAddComponent } from './admin/components/sidebar/hotel/hotel-add/hotel-add.component';
import { HotelEditComponent } from './admin/components/sidebar/hotel/hotel-edit/hotel-edit.component';
import { HotelComponent } from './admin/components/sidebar/hotel/hotel.component';
import { SafariAgencyComponent } from './admin/components/sidebar/safari-agency/safari-agency.component';
import { AgencyAddComponent } from './admin/components/sidebar/safari-agency/agency-add/agency-add.component';
import { AgencyEditComponent } from './admin/components/sidebar/safari-agency/agency-edit/agency-edit.component';
import { TouristComponent } from './admin/components/sidebar/tourist/tourist.component';
import { TouristAddComponent } from './admin/components/sidebar/tourist/tourist-add/tourist-add.component';
import { TouristEditComponent } from './admin/components/sidebar/tourist/tourist-edit/tourist-edit.component';
import { MatTableModule,  MatPaginatorModule } from '@angular/material';
import { GalleryComponent } from './homepage/home/tourplane/gallery/gallery.component';
import { ImageDetailComponent } from './homepage/home/tourplane/image/image-detail.component';
import { ImageFilterPipe } from './homepage/home/tourplane/image/shared/filter.pipe';
import { FormsComponent } from './homepage/home/tourplane/forms/forms.component';
import { CustomizedformComponent } from './homepage/home/tourplane/customizedform/customizedform.component';
import { PackagesAddComponent } from './admin/components/sidebar/packages/packages-add/package-add.component';
import {PackagesComponent} from './admin/components/sidebar/packages/packages.component';
import { TownComponent } from './homepage/home/explora/town/town.component';
import { PassengerPickupComponent } from './admin/components/sidebar/passenger-pickup/passenger-pickup.component';
import { MapComponent } from './homepage/home/map/map.component';
import { HotelViewComponent } from './admin/components/sidebar/hotel/hotel-view/hotel-view.component';
import { PlacesComponent } from './admin/components/sidebar/places/places.component';
import { PlacesAddComponent } from './admin/components/sidebar/places/places-add/places-add.component';
import { AvailabilityComponent } from './homepage/home/tourplane/availability/availability.component';
import { SafariplaneComponent } from './homepage/home/safariplane/safariplane.component';
import { Galary1Component } from './homepage/home/safariplane/galary1/galary1.component';
import { Image1Component } from './homepage/home/safariplane/image1/image1.component';
import { AccomadationplaneComponent } from './homepage/home/accomadation/accomadationplane/accomadationplane.component';
import { Galary2Component } from './homepage/home/accomadation/galary2/galary2.component';
import { Image2Component } from './homepage/home/accomadation/image2/image2.component';
import { SearchComponent } from './homepage/home/accomadation/search/search.component';
import { CheckComponent } from './homepage/home/accomadation/check/check.component';
import { AgmDirectionModule } from 'agm-direction'; 


import { AccountManagementComponent } from './bookings/account-management/account-management.component';
import { BookingsComponent } from './bookings/bookings.component';
import { ViewRoomsComponent } from './bookings/view-rooms/view-rooms.component';
import { AddRoomsComponent } from './bookings/add-rooms/add-rooms.component';
import { EditRoomsComponent } from './bookings/edit-rooms/edit-rooms.component';
import { PaymentComponent } from './homepage/home/accomadation/payment/payment.component';
import { TouristAccountComponent } from './tourist-account/tourist-account.component';
import { AccomadationsComponent } from './admin/components/sidebar/accomadations/accomadations.component';
import { AddaccomadationsComponent } from './admin/components/sidebar/accomadations/addaccomadations/addaccomadations.component';
import { UserrolesComponent } from './user/userroles/userroles.component';
import { HotelsignupComponent } from './user/userroles/hotelsignup/hotelsignup.component';
import { SafarisignupComponent } from './user/userroles/safarisignup/safarisignup.component';








export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    SignInComponent,
    HomepageComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    ContactComponent,
    HeaderComponent,
    BannerComponent,
    ExploraComponent,
    SafariComponent,
    AboutComponent,
    PackageComponent,
    AdminComponent,
    DashboardComponent,
    ComponentsComponent,
    SidebarComponent,
    NavbarComponent,
    BreadcrumbComponent,
    TouristHomeComponent,
    LogedInNavComponent,
    HotelAddComponent,
    HotelEditComponent,
    HotelComponent,
    SafariAgencyComponent,
    AgencyAddComponent,
    AgencyEditComponent,
    TouristComponent,
    TouristAddComponent,
    TouristEditComponent,
    GalleryComponent,
    ImageDetailComponent,
    ImageFilterPipe,
    FormsComponent,
    CustomizedformComponent,
    PackagesAddComponent,
    PackagesComponent,
    TownComponent,
    PassengerPickupComponent,
    MapComponent,
    HotelViewComponent,
    PlacesComponent,
    PlacesAddComponent,   
    AvailabilityComponent,
    SafariplaneComponent,
    Galary1Component,
    Image1Component,
    AccountManagementComponent,
    BookingsComponent,
    ViewRoomsComponent,
    AddRoomsComponent,
    EditRoomsComponent,
    AccomadationplaneComponent,
    Galary2Component,
    Image2Component,
    SearchComponent,
    CheckComponent,
    PaymentComponent,
    TouristAccountComponent,
    AccomadationsComponent,
    AddaccomadationsComponent,
    UserrolesComponent,
    HotelsignupComponent,
    SafarisignupComponent,
    
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2PageScrollModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['example.com'],
        blacklistedRoutes: ['example.com/examplebadroute/']
      }
    }),
    MatTableModule,
    MatListModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCcIWFonog_hbWAXEwDBirNLXU4W2LBYy4'
    }),
    AgmDirectionModule,
    AngularFileUploaderModule,
    MatFileUploadModule,
    MatButtonModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 