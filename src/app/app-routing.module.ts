import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventsListPageComponent} from './pages/events-list-page/events-list-page.component';
import {AppComponent} from './app.component';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {ConferencesListPageComponent} from './pages/conferences-list-page/conferences-list-page.component';


const routes: Routes = [
  {
    path: 'events',
    component: EventsListPageComponent
  },
  {
    path: 'conferences',
    component: ConferencesListPageComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: MainPageComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
