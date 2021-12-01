import { HomeComponent } from './routes/home/home.component';
import { AdminLayoutComponent } from './theme/admin-layout/admin-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: '', component: AdminLayoutComponent,
    children: [
      {
        path: 'home', component: HomeComponent
      },

      { path: '', redirectTo: '/home', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
