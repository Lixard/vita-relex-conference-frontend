import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PhotoCreateForm, PhotoCreateModel, PhotoModel} from '../../models/photo.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PhotoService} from '../../services/photo.service';
import {ActivatedRoute} from '@angular/router';


class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.scss']
})
export class PhotoEditorComponent implements OnInit {
  form: FormGroup;
  @Input()
  photo: PhotoModel;
  @Input()
  conferenceId: number;
  constructor(private formBuilder: FormBuilder, private photoService: PhotoService, private route: ActivatedRoute) { }
  savedPhoto: PhotoCreateModel;
  @Input()
  photos: PhotoModel[];
  @Output()
  endChanging = new EventEmitter<PhotoCreateModel>();
  selectedFile: ImageSnippet;
  ngOnInit(): void {
    this.buildForm();
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      description: this.formBuilder.control(undefined, [Validators.max(300)])
    });
  }

  uploadPhoto(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
    });

    reader.readAsDataURL(file);
  }

  savePhoto(value: PhotoCreateForm) {
    if (this.selectedFile == null) {
      window.alert('Вы не загрузили изображение!');
    }
    const conferenceId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.savedPhoto = {
      conferenceId,
      description: value.description
    };
    this.endChanging.emit(this.savedPhoto);
    this.photoService.uploadPhoto(this.savedPhoto, this.selectedFile.file, conferenceId).subscribe((data: PhotoModel) => {
      this.photos.push(data);
    });
  }
}
