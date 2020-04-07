import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserMenuPagesRoutingModule } from './user-menu-pages-routing.module';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { SchedulePageComponent } from './pages/schedule-page/schedule-page.component';


@NgModule({
  declarations: [ProfilePageComponent, SchedulePageComponent],
  imports: [
    CommonModule,
    UserMenuPagesRoutingModule
  ]
})
export class UserMenuPagesModule { }
