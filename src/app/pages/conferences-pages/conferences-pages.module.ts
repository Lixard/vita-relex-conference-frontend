import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConferencesPagesRoutingModule } from './conferences-pages-routing.module';
import {AboutConferencePageComponent} from './pages/about-conference-page/about-conference-page.component';
import {ConferencesListPageComponent} from './pages/conferences-list-page/conferences-list-page.component';
import {ConferenceModule} from '../../entities/conference/conference.module';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {EventModule} from '../../entities/event/event.module';


@NgModule({
  declarations: [
    AboutConferencePageComponent,
    ConferencesListPageComponent
  ],
  imports: [
    CommonModule,
    ConferencesPagesRoutingModule,
    ConferenceModule,
    MatCardModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    EventModule
  ],
  exports: [
    AboutConferencePageComponent,
    ConferencesListPageComponent
  ]
})
export class ConferencesPagesModule { }
