import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/sharedComponents/header/header.component';
import { FooterComponent } from './components/sharedComponents/footer/footer.component';
import { WeatherComponent } from './components/weather/weather.component';
import { ViewFavComponent } from './components/view-fav/view-fav.component';
import { WeatherSearchComponent } from './components/weather/weather-search/weather-search.component';
import { WeatherSearchResultComponent } from './components/weather/weather-search-result/weather-search-result.component';
import { FavListComponent } from './components/view-fav/fav-list/fav-list.component';

const routes: Routes = [
  { path: 'favourites', component: ViewFavComponent },
  { path: 'weather', component: WeatherComponent },
  { path: '', redirectTo: '/weather', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WeatherComponent,
    ViewFavComponent,
    WeatherSearchComponent,
    WeatherSearchResultComponent,
    FavListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
