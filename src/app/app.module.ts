import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutesModule } from './routes/routes.module';
import { SessionsModule } from './routes/sessions/sessions.module';
import { SharedModule } from './shared/shared.module';
import { ThemeModule } from './theme/theme.module';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ThemeModule,
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
