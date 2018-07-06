import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Subcomponent1Component } from './subcomponent1/subcomponent1.component';
import { StudentService } from './student.service'; //import service
import { HttpClientModule } from '@angular/common/http'//import HttpModule
@NgModule({
  declarations: [
    AppComponent,
    Subcomponent1Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule  //add name into import
  ],
  providers: [StudentService], //register service
  bootstrap: [AppComponent]
})
export class AppModule { }
