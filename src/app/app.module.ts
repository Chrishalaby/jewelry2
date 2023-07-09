import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app.layout.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AppLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
