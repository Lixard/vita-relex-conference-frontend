import {PhotoCreateModel, PhotoModel} from '../models/photo.model';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {List} from '../../../core/models/list.model';


@Injectable({
  providedIn: 'root'
})

export class PhotoService {
  constructor(private http: HttpClient) {
  }

  getPhotoArchive(conferenceId: number): Observable<List<PhotoModel>> {
    return this.http.get<List<PhotoModel>>('/api/conferences/' + conferenceId + '/album');
  }

  uploadPhoto(photoModel: PhotoCreateModel, image: File, conferenceId: number) {
    const formData = new FormData();
    formData.append('file', image, image.name);
    photoModel.conferenceId = conferenceId;
    const blobOverrides = new Blob([JSON.stringify(photoModel)], {
      type: 'application/json',
    });
    formData.append('photoArchiveDto', blobOverrides);
    console.log(this.http.post('/api/conferences/' + conferenceId + '/album', formData));
    return this.http.post('/api/conferences/' + conferenceId + '/album', formData);
  }

  updatePhoto(image: File, userId: number) {
    const formData = new FormData();
    formData.append('file', image, image.name);
    return this.http.post('/api/users/' + userId + '/photo', formData);
  }

  deletePhoto(conferenceId: number, photoId: number) {
    return this.http.delete('/api/conferences/' + conferenceId + '/album/' + photoId);
  }
  deleteAlbum(conferenceId: number) {
    return this.http.delete('/api/conferences/' + conferenceId + '/album');
  }
}
