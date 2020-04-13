import {Component, Input, OnInit} from '@angular/core';
import {PhotoModel} from '../../models/photo.model';
import {FormGroup} from '@angular/forms';
import {PhotoService} from '../../services/photo.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  @Input()
  photo: PhotoModel;
  form: FormGroup;
  @Input()
  photos: PhotoModel[];
  deleted = false;
  constructor(private route: ActivatedRoute, private  photoService: PhotoService) { }

  ngOnInit(): void {

  }

  deletePhoto(conferenceId: number, photoId: number) {
    this.photoService.deletePhoto(conferenceId, photoId).subscribe(data => {
      this.deleted = true;
    });
  }
}
