import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SchedulePageComponent} from './pages/schedule-page/schedule-page.component';
import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component';


const routes: Routes = [
  {
    path: 'schedule',
    component: SchedulePageComponent
  },
  {
    path: 'dashboard',
    canActivate: [],
    component: DashboardPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserMenuPagesRoutingModule { }
