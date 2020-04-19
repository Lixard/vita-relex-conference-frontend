import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserMenuComponent} from './components/user-menu/user-menu.component';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {LOAD_CURRENT_USER_INITIALIZER} from './services/current-user.service';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [
    UserMenuComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    MatMenuModule,
    FlexLayoutModule
  ],
  providers: [
    LOAD_CURRENT_USER_INITIALIZER
  ],
  exports: [
    UserMenuComponent,
  ]
})
export class CoreModule { }
