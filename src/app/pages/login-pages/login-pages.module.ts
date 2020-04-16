import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginPagesRoutingModule} from './login-pages-routing.module';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {RegisterPageComponent} from './pages/register-page/register-page.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatSelectModule} from '@angular/material/select';
import {UserRolesPipe} from './pages/register-page/user-roles.pipe';

@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    UserRolesPipe
  ],
  imports: [
    CommonModule,
    LoginPagesRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSelectModule
  ],
  exports: [
    LoginPageComponent,
    RegisterPageComponent
  ]
})
export class LoginPagesModule { }
