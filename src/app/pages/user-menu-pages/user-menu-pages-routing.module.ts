import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfilePageComponent} from './pages/profile-page/profile-page.component';
import {SchedulePageComponent} from './pages/schedule-page/schedule-page.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProfilePageComponent
  },
  {
    path: 'schedule',
    component: SchedulePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserMenuPagesRoutingModule { }
