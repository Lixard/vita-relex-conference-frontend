import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegisterService} from '../../../../core/services/register.service';
import {RegisterRoles, UserModel, UserRegistrationForm} from '../../../../entities/user/models/user.model';
import {Router} from '@angular/router';
import {AuthService} from '../../../../core/services/auth.service';
import {switchMap} from 'rxjs/operators';
import {CurrentUserService} from '../../../../core/services/current-user.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  form: FormGroup;
  user: UserModel;
  readonly roles = [RegisterRoles.USER, RegisterRoles.COMPANY_ACCOUNT];
  hidePassword = true;

  constructor(private fb: FormBuilder,
              private registerService: RegisterService,
              private auth: AuthService,
              private router: Router,
              private currentUser: CurrentUserService) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.form.reset();
  }

  private buildForm(): void {
    this.form = this.fb.group({
      username: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required),
      firstName: this.fb.control('', Validators.required),
      lastName: this.fb.control('', Validators.required),
      email: this.fb.control('', [Validators.required, Validators.email]),
      role: this.fb.control(undefined)
    });
  }

  register(form: UserRegistrationForm) {
    this.user = {
      username: form.username,
      password: form.password,
      role: form.role,
      personalInfo: {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email
      }
    } as unknown as UserModel;
    this.registerService.registerUser(this.user).subscribe(() => {
      this.auth.login({
        username: form.username,
        password: form.password
      }).pipe(switchMap(() => this.auth.loadProfile())).subscribe(() => {
        this.auth.loadProfile().subscribe(
          (profile) => {
            this.currentUser.user$.next(profile);
            this.router.navigateByUrl(`/users/${profile.id}`);
          });
      });
    });
  }
}
