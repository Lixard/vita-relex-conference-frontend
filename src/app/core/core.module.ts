import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {LOAD_CURRENT_USER_INITIALIZER} from './services/auth.service';



@NgModule({
  declarations: [UserMenuComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule
  ],
  providers: [
    LOAD_CURRENT_USER_INITIALIZER
  ],
  exports: [
    UserMenuComponent
  ]
})
export class CoreModule { }
