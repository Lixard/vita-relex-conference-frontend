import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserMenuPagesRoutingModule} from './user-menu-pages-routing.module';
import {SchedulePageComponent} from './pages/schedule-page/schedule-page.component';
import {EventModule} from '../../entities/event/event.module';
import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component';
import {ConferenceModule} from '../../entities/conference/conference.module';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {FlexLayoutModule} from '@angular/flex-layout';


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
        FlexLayoutModule,
    ],
  exports: [
    SchedulePageComponent
  ]
})
export class UserMenuPagesModule { }
