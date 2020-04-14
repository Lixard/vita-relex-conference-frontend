import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMenuPagesRoutingModule } from './user-menu-pages-routing.module';
import { SchedulePageComponent } from './pages/schedule-page/schedule-page.component';
import {EventModule} from '../../entities/event/event.module';
import {BrowserModule} from '@angular/platform-browser';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import {ConferenceModule} from '../../entities/conference/conference.module';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    SchedulePageComponent,
    DashboardPageComponent
  ],
  imports: [
    CommonModule,
    UserMenuPagesRoutingModule,
    EventModule,
    ConferenceModule,
    MatButtonModule,
    MatDividerModule,
  ],
  exports: [
    SchedulePageComponent
  ]
})
export class UserMenuPagesModule { }
