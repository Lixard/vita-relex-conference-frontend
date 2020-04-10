import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginData, LoginDataForm} from '../../../../core/models/login-data.model';
import {AuthService} from '../../../../core/services/auth.service';
import {Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {CurrentUserService} from '../../../../core/services/current-user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup;

  loginData: LoginData;

  constructor(private formBuilder: FormBuilder,
              private auth: AuthService,
              private currentUser: CurrentUserService,
              private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  login(form: LoginDataForm) {
    this.auth.login({
      username: form.username,
      password: form.password
    }).pipe(
      switchMap(() => this.auth.loadProfile())
    ).subscribe(
      profile => {
        this.currentUser.user$.next(profile);
        this.router.navigateByUrl('/');
      },
      () => {
        this.form.setErrors({
          server: true
        });
        this.form.controls.username.setErrors({
          'login-incorrect': true
        });
        this.form.controls.password.setErrors({
          'login-incorrect': true
        });
      }
    );


  }

  private buildForm() {
    this.form = this.formBuilder.group({
      username: this.formBuilder.control(undefined, [Validators.required]),
      password: this.formBuilder.control(undefined, [Validators.required]),
    });
  }
}
