import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { SignInComponent} from './user/sign-in/sign-in.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminComponent } from './admin/admin.component'
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SessionGuard } from './auth/session.guard';
import { RoleGuard } from './auth/role.guard';
import { TouristHomeComponent } from './tourist-home/tourist-home.component';
import { HotelComponent } from './admin/components/sidebar/hotel/hotel.component';
import { SafariAgencyComponent } from './admin/components/sidebar/safari-agency/safari-agency.component';
import { TouristComponent } from './admin/components/sidebar/tourist/tourist.component';
import { HotelAddComponent } from './admin/components/sidebar/hotel/hotel-add/hotel-add.component';
import { AgencyAddComponent } from './admin/components/sidebar/safari-agency/agency-add/agency-add.component';
import { TouristAddComponent } from './admin/components/sidebar/tourist/tourist-add/tourist-add.component';
import { GalleryComponent } from './homepage/home/tourplane/gallery/gallery.component';
import { ImageDetailComponent } from './homepage/home/tourplane/image/image-detail.component';
import { FormsComponent } from './homepage/home/tourplane/forms/forms.component';
import { CustomComponent } from './homepage/home/tourplane/custom/custom.component';
import { CustomizedformComponent } from './homepage/home/tourplane/customizedform/customizedform.component';
import { PackagesAddComponent } from './admin/components/sidebar/packages/packages-add/package-add.component';
import { PackagesComponent } from './admin/components/sidebar/packages/packages.component';
import { PlacesComponent } from './admin/components/sidebar/places/places.component';
import { PlacesAddComponent } from './admin/components/sidebar/places/places-add/places-add.component';


import { Galary1Component } from './homepage/home/safariplane/galary1/galary1.component';
import { Image1Component } from './homepage/home/safariplane/image1/image1.component';



const routes: Routes = [
  {
    path:'home', component: HomepageComponent,canActivate: [SessionGuard]
  },
 
  {
    path: 'signup', component: UserComponent,canActivate: [SessionGuard],
    children: [{path: '', component: SignUpComponent}]
  },
  {
    path: 'signin', component: UserComponent,canActivate: [SessionGuard],
    children: [{path: '', component: SignInComponent}]
  },
  //admin routes
  {
    path: 'admin', component: AdminComponent,
    canActivate: [RoleGuard],
    data: { 
    expectedRole: 'Admin'
    } ,

    //admin dashboard routes
    children: [{ path: '', component: DashboardComponent ,canActivate: [RoleGuard],data: {expectedRole: 'Admin'},
    
      children: [

      //admin dashboard sidebar hotel routes
      {path:'hotel', component: HotelComponent,canActivate: [RoleGuard],data: {expectedRole: 'Admin'}},
      {path: 'hotel/add', component: HotelAddComponent,canActivate: [RoleGuard],data: {expectedRole: 'Admin'}},
      
      
      //admin dashboard sidebar places routes
      {path:'place', component: PlacesComponent,canActivate: [RoleGuard],data: {expectedRole: 'Admin'}},
      {path: 'place/add', component: PlacesAddComponent,canActivate: [RoleGuard],data: {expectedRole: 'Admin'}},


      //admin dashboard sidebar safari routes
      {path:'safari-agency', component: SafariAgencyComponent,canActivate: [RoleGuard],data: {expectedRole: 'Admin'}},
      {path: 'safari-agency/add', component: AgencyAddComponent,canActivate: [RoleGuard],data: {expectedRole: 'Admin'}},

      //admin dashboard sidebar tourist routes
      {path:'tourist', component: TouristComponent,canActivate: [RoleGuard],data: {expectedRole: 'Admin'}},
      {path: 'tourist/add', component: TouristAddComponent,canActivate: [RoleGuard],data: {expectedRole: 'Admin'}},

      {path:'packages', component: PackagesComponent,canActivate: [RoleGuard],data: {expectedRole: 'Admin'}},
      {path: 'packages/add', component: PackagesAddComponent,canActivate: [RoleGuard],data: {expectedRole: 'Admin'}},



      ]}]
   },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path:'tourist', component: TouristHomeComponent,canActivate: [RoleGuard],
    data: { 
    expectedRole: 'User'
    }
  },
  {
    path:'gallery', component: GalleryComponent
  },
  { path: "image/:id",component:ImageDetailComponent 
},
  { path: "forms",component:FormsComponent 
},
   {path: "custom",component:CustomComponent 
},
    {path: "customizedform",component:CustomizedformComponent 
},
    {path: "galary1",component:Galary1Component 
},
{ path: "Safariimage/:id",component:Image1Component 
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
