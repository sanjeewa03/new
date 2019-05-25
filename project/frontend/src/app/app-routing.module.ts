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
import { TouristDataResolverService } from './admin/components/sidebar/tourist/tourist-data-resolver.service';



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

      //admin dashboard sidebar safari routes
      {path:'safari-agency', component: SafariAgencyComponent,canActivate: [RoleGuard],data: {expectedRole: 'Admin'}},
      {path: 'safari-agency/add', component: AgencyAddComponent,canActivate: [RoleGuard],data: {expectedRole: 'Admin'}},

      //admin dashboard sidebar tourist routes
      {path:'tourist', component: TouristComponent,canActivate: [RoleGuard],data: {expectedRole: 'Admin', allTourists:TouristDataResolverService}},
      {path: 'tourist/add', component: TouristAddComponent,canActivate: [RoleGuard],data: {expectedRole: 'Admin'}},


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
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [TouristDataResolverService]
})
export class AppRoutingModule { }
