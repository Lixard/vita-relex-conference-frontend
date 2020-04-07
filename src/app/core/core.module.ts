import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {LOAD_CURRENT_USER_INITIALIZER} from './services/auth.service';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [
    UserMenuComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    MatMenuModule
  ],
  providers: [
    LOAD_CURRENT_USER_INITIALIZER
  ],
  exports: [
    UserMenuComponent,
  ]
})
export class CoreModule { }
