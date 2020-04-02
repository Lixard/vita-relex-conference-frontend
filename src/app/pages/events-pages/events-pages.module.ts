import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsPagesRoutingModule } from './events-pages-routing.module';
import {AboutEventPageComponent} from './pages/about-event-page/about-event-page.component';
import {EventsListPageComponent} from './pages/events-list-page/events-list-page.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {EventModule} from '../../entities/event/event.module';


@NgModule({
  declarations: [
    AboutEventPageComponent,
    EventsListPageComponent
  ],
  imports: [
    CommonModule,
    EventsPagesRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    EventModule
  ],
  exports: [
    AboutEventPageComponent,
    EventsListPageComponent
  ]
})
export class EventsPagesModule { }
