import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {UserMenuPagesGuard} from './pages/user-menu-pages/guards/user-menu-pages.guard';
import {LoginPagesGuard} from './pages/login-pages/guards/login-pages.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainPageComponent
  },
  {
    path: '',
    canActivate: [LoginPagesGuard],
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
    canActivate: [UserMenuPagesGuard],
    loadChildren: () => import('./pages/user-menu-pages/user-menu-pages-routing.module').then(m => m.UserMenuPagesRoutingModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/user-list-pages/user-pages-routing.module').then(m => m.UserPagesRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
