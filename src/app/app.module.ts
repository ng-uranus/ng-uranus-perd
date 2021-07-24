import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NuTableModule } from 'ng-uranus-perd/table';
import { NuFormModule } from 'ng-uranus-perd/form';
import { NuCommonModule } from 'ng-uranus-perd/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import zh from '@angular/common/locales/zh';
import {registerLocaleData} from '@angular/common';
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NuTableModule,
    NuFormModule,
    NuCommonModule,
    NzIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
