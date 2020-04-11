import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserMenuPagesRoutingModule } from './user-menu-pages-routing.module';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { SchedulePageComponent } from './pages/schedule-page/schedule-page.component';
import {EventModule} from '../../entities/event/event.module';
import {BrowserModule} from '@angular/platform-browser';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import {ConferenceModule} from '../../entities/conference/conference.module';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    ProfilePageComponent,
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
    ProfilePageComponent,
    SchedulePageComponent
  ]
})
export class UserMenuPagesModule { }
