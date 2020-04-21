import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserRolesPipe} from './pipes/user-roles.pipe';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    UserRolesPipe
  ],
    imports: [
        CommonModule,
        MatCardModule
    ],
  exports: [
    UserRolesPipe
  ]
})
export class UserModule { }
