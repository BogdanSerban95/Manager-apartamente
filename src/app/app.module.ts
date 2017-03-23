import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'hammerjs'

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app-component/app.component';
import { MaterialModule } from '@angular/material';
import { ApartamenteComponent } from './apartamente/apartamente.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetaliiComponent } from './detalii/detalii.component';
import { AdaugareApartamentComponent } from './adaugare-apartament/adaugare-apartament.component'


@NgModule({
  declarations: [
    AppComponent,
    ApartamenteComponent,
    DashboardComponent,
    DetaliiComponent,
    AdaugareApartamentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
