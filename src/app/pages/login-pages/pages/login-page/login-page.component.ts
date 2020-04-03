import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginData, LoginDataForm} from '../../../../core/models/login-data.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup;

  loginData: LoginData;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  login(form: LoginDataForm) {
    this.loginData = {
      username: form.username,
      password: form.password
    };
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      username: this.formBuilder.control(undefined, [Validators.required]),
      password: this.formBuilder.control(undefined, [Validators.required]),
    });
  }
}
