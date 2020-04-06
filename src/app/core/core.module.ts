import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [UserMenuComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule
  ],
  providers: [
  ],
  exports: [
    UserMenuComponent
  ]
})
export class CoreModule { }
