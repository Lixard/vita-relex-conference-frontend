export interface PhotoModel {
  photoId: number;
  conferenceId: number;
  url: string;
  description: string;
  createdAt: string;
}
export interface PhotoCreateModel {
  conferenceId: number;
  description: string;
}
export interface PhotoCreateForm {
  description: string;
}
