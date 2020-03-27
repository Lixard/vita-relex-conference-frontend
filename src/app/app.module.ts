import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventsListPageComponent } from './pages/events-list-page/events-list-page.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ConferencesListPageComponent } from './pages/conferences-list-page/conferences-list-page.component';
import { AboutConferencePageComponent } from './pages/about-conference-page/about-conference-page.component';
import { AboutEventPageComponent } from './pages/about-event-page/about-event-page.component';
import { EventComponent } from './components/event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListPageComponent,
    MainPageComponent,
    ConferencesListPageComponent,
    AboutConferencePageComponent,
    AboutEventPageComponent,
    EventsListOfConferencePageComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    HttpClientModule,
    MatButtonModule,
    MatExpansionModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
