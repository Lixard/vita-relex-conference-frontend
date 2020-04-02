import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutEventPageComponent} from './pages/about-event-page/about-event-page.component';
import {EventsListPageComponent} from './pages/events-list-page/events-list-page.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: EventsListPageComponent
  },
  {
    path: ':id',
    component: AboutEventPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsPagesRoutingModule { }
