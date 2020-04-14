import {PersonalInfoModel} from './personal-info.model';
export interface UserModel {
  password: number;
  userId: number;
  username: string;
  role: string;
  linkImage: string;
  personalInfo: PersonalInfoModel;
}
export interface UserCreateModel {
  personalInfo: PersonalInfoModel;
}

export class UserCreateForm {
  firstName: string;
  lastName: string;
  email: string;
}
