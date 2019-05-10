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
  {
    path: 'admin', component: AdminComponent,
    canActivate: [RoleGuard],
    data: { 
    expectedRole: 'Admin'
    } ,
    children: [{ path: '', component: DashboardComponent }]
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
    path: 'hotel', component: AdminComponent,
    canActivate: [RoleGuard],
    data: { 
    expectedRole: 'Admin'
    } ,
    children: [
      {path:'', component: HotelComponent}]
   },
   
   
   {
    path: 'safari-agency', component: AdminComponent,
    canActivate: [RoleGuard],
    data: { 
    expectedRole: 'Admin'
    } ,
    children: [
      {path:'', component: SafariAgencyComponent}]
   },
   
   {
    path: 'tourist', component: AdminComponent,
    canActivate: [RoleGuard],
    data: { 
    expectedRole: 'Admin'
    } ,
    children: [
      {path:'', component: TouristComponent}]
   }


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
