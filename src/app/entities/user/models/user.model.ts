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
  username: string;
  personalInfo: PersonalInfoModel;
}

export class UserCreateForm {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface UserRegistrationForm {
  username: string;
  password: string;
  role: RegisterRoles;
  linkImage: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface RegisterUserModel {
  username: string;
  password: string;
  role: RegisterRoles;
  personalInfo: PersonalInfoModel;
  linkImage?: string;
}

export enum RegisterRoles {
  USER = 'USER',
  COMPANY_ACCOUNT = 'COMPANY_ACCOUNT'
}
