import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LanguagesComponent } from './languages/languages.component';
import { OsComponent } from './os/os.component';
import { DatabaseComponent } from './database/database.component';

const routes: Routes = [
  {path:'language',component:LanguagesComponent},
  {path:'database',component:DatabaseComponent},
  {path:'operating',component:OsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
