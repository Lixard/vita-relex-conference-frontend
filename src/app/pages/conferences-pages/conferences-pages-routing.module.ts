import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConferencesListPageComponent} from './pages/conferences-list-page/conferences-list-page.component';
import {AboutConferencePageComponent} from './pages/about-conference-page/about-conference-page.component';
import {ConferencePhotoArchivePageComponent} from './pages/conference-photo-archive-page/conference-photo-archive-page.component';
import {PhotoComponent} from '../../entities/photo/components/photo/photo.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ConferencesListPageComponent
  },
  {
    path: ':id',
    component: AboutConferencePageComponent
  },
  {
    path: ':id/album',
    component: ConferencePhotoArchivePageComponent
  },
  {
    path: ':id/album/photoId',
    component: PhotoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConferencesPagesRoutingModule { }
