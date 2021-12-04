import { PaymentComponent } from './payment/payment.component';
import { BookComponent } from './book/book.component';
import { RegisterComponent } from './sessions/register/register.component';
import { LoginComponent } from './sessions/login/login.component';
import { AuthLayoutComponent } from './../theme/auth-layout/auth-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './../theme/admin-layout/admin-layout.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home', component: HomeComponent,
      },
      {
        path: 'cart', component: CartComponent,
      },
      {
        path: 'book', component: BookComponent,
      },
      {
        path: 'payment', component: PaymentComponent,
      },

      {
        path: 'sessions', loadChildren: () => import('./sessions/sessions.module').then(m => m.SessionsModule),
      },
    ]
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: { title: 'Login', titleI18n: 'Login' },
      },
      {
        path: 'register',
        component: RegisterComponent,
        data: { title: 'Register', titleI18n: 'Register' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
