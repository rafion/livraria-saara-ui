import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './../theme/admin-layout/admin-layout.component';
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
        path: 'sessions', loadChildren: () => import('./sessions/sessions.module').then(m => m.SessionsModule),
        data: { title: 'Sessions', titleI18n: 'Sessions' },
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }