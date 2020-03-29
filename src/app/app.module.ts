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
import { CreateNewEventComponent } from './components/create-new-event/create-new-event.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {EditorModule} from '@tinymce/tinymce-angular';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import { CreateNewConferenceComponent } from './components/create-new-conference/create-new-conference.component';
import { ChangeConferenceComponent } from './components/change-conference/change-conference.component';
import { ChangeEventComponent } from './components/change-event/change-event.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListPageComponent,
    MainPageComponent,
    ConferencesListPageComponent,
    AboutConferencePageComponent,
    AboutEventPageComponent,
    EventComponent,
    CreateNewEventComponent,
    CreateNewConferenceComponent,
    ChangeConferenceComponent,
    ChangeEventComponent
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
    MatGridListModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    EditorModule,
    MatAutocompleteModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
