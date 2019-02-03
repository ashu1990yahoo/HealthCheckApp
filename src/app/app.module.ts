import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HealthcheckModule} from './healthcheck/healthcheck.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HealthcheckModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
