import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventsListPageComponent} from '../events-pages/pages/events-list-page/events-list-page.component';
import {AboutEventPageComponent} from '../events-pages/pages/about-event-page/about-event-page.component';
import {ConferencesListPageComponent} from './pages/conferences-list-page/conferences-list-page.component';
import {AboutConferencePageComponent} from './pages/about-conference-page/about-conference-page.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ConferencesListPageComponent
  },
  {
    path: ':id',
    component: AboutConferencePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConferencesPagesRoutingModule { }
