import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NuTableModule } from 'ng-uranus-perd/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NuTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
