import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {UserListPageComponent} from './pages/user-list-page/user-list-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainPageComponent
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login-pages/login-pages-routing.module').then(m => m.LoginPagesRoutingModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./pages/events-pages/events-pages-routing.module').then(m => m.EventsPagesRoutingModule)
  },
  {
    path: 'conferences',
    loadChildren: () => import('./pages/conferences-pages/conferences-pages-routing.module').then(m => m.ConferencesPagesRoutingModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user-menu-pages/user-menu-pages-routing.module').then(m => m.UserMenuPagesRoutingModule)
  },
  {
    path: 'users',
    component: UserListPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
