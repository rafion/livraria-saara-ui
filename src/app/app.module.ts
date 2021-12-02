import { SharedModule } from './shared/shared.module';
import { RoutesModule } from './routes/routes.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminLayoutComponent } from './theme/admin-layout/admin-layout.component';
import { HeaderComponent } from './theme/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { SessionsModule } from './routes/sessions/sessions.module';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RoutesModule,
    SessionsModule,
    HttpClientModule,
    SharedModule

  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
