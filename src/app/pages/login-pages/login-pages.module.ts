import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPagesRoutingModule } from './login-pages-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    LoginPagesRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [
    LoginPageComponent
  ]
})
export class LoginPagesModule { }
