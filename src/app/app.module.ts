import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CarDetailComponent } from './car-detail.component';
import { CarsComponent } from './cars.component';
import { CarService } from './car.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    CarDetailComponent,
    CarsComponent
  ],
  providers: [
    CarService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
