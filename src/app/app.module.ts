import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ProductsComponent} from "./DS.SP/products.component";
import {WeatherComponent} from "./weather/weather.compunent";

@NgModule({
  declarations: [
    AppComponent,
        ProductsComponent,
    WeatherComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
