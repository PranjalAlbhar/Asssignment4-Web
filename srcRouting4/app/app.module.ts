import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanguagesComponent } from './languages/languages.component';
import { OsComponent } from './os/os.component';
import { DatabaseComponent } from './database/database.component';

@NgModule({
  declarations: [
    AppComponent,
    LanguagesComponent,
    OsComponent,
    DatabaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
