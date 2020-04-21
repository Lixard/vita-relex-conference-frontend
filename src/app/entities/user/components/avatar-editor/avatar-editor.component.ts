import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PhotoCreateForm, PhotoModel} from '../../../photo/models/photo.model';
import {PhotoService} from '../../../photo/services/photo.service';
import {ActivatedRoute} from '@angular/router';
import {UserCreateModel, UserModel} from '../../models/user.model';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-avatar-editor',
  templateUrl: './avatar-editor.component.html',
  styleUrls: ['./avatar-editor.component.scss']
})
export class AvatarEditorComponent implements OnInit {
  selectedFile: ImageSnippet;
  @Input()
  userId: number;
  @Input()
  toggle: boolean;
  @Output()
  endChanging = new EventEmitter<string>();
  constructor(private photoService: PhotoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  uploadAvatar(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
    });

    reader.readAsDataURL(file);
  }
  saveAvatar() {
    if (this.selectedFile == null) {
      window.alert('Вы не загрузили изображение!');
    }
    this.userId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.photoService.uploadAvatar(this.userId, this.selectedFile.file).subscribe((data: UserModel) => {
      this.endChanging.emit(data.linkImage);
    });
  }

  closeEditor() {
    this.endChanging.emit(null);
  }
}
