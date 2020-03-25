import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventsListPageComponent} from './pages/events-list-page/events-list-page.component';
import {AppComponent} from './app.component';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {ConferencesListPageComponent} from './pages/conferences-list-page/conferences-list-page.component';
import {AboutConferencePageComponent} from './pages/about-conference-page/about-conference-page.component';
import {AboutEventPageComponent} from './pages/about-event-page/about-event-page.component';


const routes: Routes = [
  {
    path: 'events',
    component: EventsListPageComponent,
    children: [
      {
        path: 'about/:event',
        component: AboutEventPageComponent,
      }]
  },
  {
    path: 'conferences',
    component: ConferencesListPageComponent,
    children: [
      {
        path: 'about/:conference',
        component: AboutConferencePageComponent
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    component: MainPageComponent
  },
  {
    path: 'about-conference/:conference',
    component: AboutConferencePageComponent,
  },
  {
    path: 'about-event/:event',
    component: AboutEventPageComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
