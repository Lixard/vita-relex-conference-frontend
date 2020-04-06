import {PersonalInfoModel} from './personal-info.model';
export interface UserModel {
  userId: number;
  username: string;
  role: string;
  linkImage: string;
  personalInfo: PersonalInfoModel;
}
