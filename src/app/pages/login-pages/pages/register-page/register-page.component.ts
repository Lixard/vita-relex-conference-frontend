import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegisterService} from '../../../../core/services/register.service';
import {RegisterRoles, UserModel, UserRegistrationForm} from '../../../../entities/user/models/user.model';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  form: FormGroup;
  user: UserModel;
  roles = RegisterRoles;
  something: string;

  constructor(private fb: FormBuilder, private registerService: RegisterService) {
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
       this.registerService.registerUser(this.user).subscribe(() => console.log('success!'));
  }
}

