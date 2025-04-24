import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminComponent } from './admin/admin.component';
import { WelcomeComponent } from './welcome/welcome.component';


import { AdminPageComponent } from './admin-page/admin-page.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'cart',component:CartComponent
  },
  {
    path:'profile',component:ProfileComponent
  },
  {
    path:'registration',component:RegistrationComponent
  },
  
  {
    path:'admin', component:AdminComponent
  },
  {
    path:'welcome',component:WelcomeComponent
  },
  
  {
    path:'adminpage',component:AdminPageComponent
  },
  {
    path:'payment',component:PaymentComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }