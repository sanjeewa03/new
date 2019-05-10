import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
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
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['example.com'],
        blacklistedRoutes: ['example.com/examplebadroute/']
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
