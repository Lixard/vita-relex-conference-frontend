import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserCreateForm, UserCreateModel, UserModel} from '../../models/user.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss']
})
export class UserEditorComponent implements OnInit {

  form: FormGroup;
  toggleCancel = true;
  @Input()
  user: UserModel;
  @Input()
  userId: number;

  @Output()
  endChanging = new EventEmitter<UserCreateModel>();

  changedUser: UserCreateModel;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
      this.form = this.formBuilder.group({
        username: this.formBuilder.control(this.user.username , [Validators.max(50), Validators.required]),
        firstName: this.formBuilder.control(this.user.personalInfo.firstName, [Validators.required]),
        lastName:  this.formBuilder.control(this.user.personalInfo.lastName, [Validators.required]),
        email:  this.formBuilder.control(this.user.personalInfo.email, [ Validators.required])
      });
  }

  changeUser(value: UserCreateForm) {
    this.changedUser = {
      username: value.username,
      personalInfo:   {
        firstName: value.firstName,
        lastName: value.lastName,
        email: value.email
      }};
    this.userService.changeUser(this.user.userId, this.changedUser).subscribe((result: UserModel) => {
      this.user = result;
      console.log(result);
    });
    this.endChanging.emit(this.changedUser);
  }

  hideChangeUser() {
    this.endChanging.emit(this.changedUser);
  }
}
