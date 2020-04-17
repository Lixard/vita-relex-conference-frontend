import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserRolesPipe} from './pipes/user-roles.pipe';


@NgModule({
  declarations: [
    UserRolesPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserRolesPipe
  ]
})
export class UserModule { }
