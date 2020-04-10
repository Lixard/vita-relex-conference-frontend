import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserMenuPagesRoutingModule } from './user-menu-pages-routing.module';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { SchedulePageComponent } from './pages/schedule-page/schedule-page.component';
import {EventModule} from '../../entities/event/event.module';
import {BrowserModule} from '@angular/platform-browser';


@NgModule({
  declarations: [
    ProfilePageComponent,
    SchedulePageComponent
  ],
  imports: [
    CommonModule,
    UserMenuPagesRoutingModule,
    EventModule,
  ],
  exports: [
    ProfilePageComponent,
    SchedulePageComponent
  ]
})
export class UserMenuPagesModule { }
