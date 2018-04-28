import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
//for popup
import {PopupModule} from 'ng2-opd-popup';


//local imports
import {HomePageComponent} from './pages/home-page/home-page.component'
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component'
import { APIService } from './common/api.service';
import { UserService } from './services/user.service';
import { FlightService } from './services/flight.service';
import { AppConfiguration } from './common/config/app-configuration.service';

const ROUTES = [
  { path: '', component: HomePageComponent },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  exports: [
    
  ],
  declarations: [
    
    AppComponent,
    HomePageComponent,
    PageNotFoundComponent
  ],
  imports: [
    PopupModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    APIService,
    UserService,
    FlightService,
    AppConfiguration

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
