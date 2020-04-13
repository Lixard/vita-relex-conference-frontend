import { Component, OnInit } from '@angular/core';
import {PhotoModel} from '../../../../entities/photo/models/photo.model';
import {ActivatedRoute} from '@angular/router';
import {PhotoService} from '../../../../entities/photo/services/photo.service';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogComponent, ConfirmDialogModel} from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-conference-album',
  templateUrl: './conference-photo-archive-page.component.html',
  styleUrls: ['./conference-photo-archive-page.component.scss']
})
export class ConferencePhotoArchivePageComponent implements OnInit {
  result = true;
  photos: PhotoModel[];
  toggle = false;
  conferenceId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private photoArchiveService: PhotoService, public dialog: MatDialog, private photoService: PhotoService) { }

  ngOnInit(): void {
    this.photoArchiveService.getPhotoArchive(this.conferenceId)
      .subscribe(result => {
        // @ts-ignore
        this.photos = result;
      });
  }
  openUploadImage() {
    this.toggle = !this.toggle;
  }
  confirmDialog(): void {
    const message = `Вы действительно хотите очистить альбом?`;

    const dialogData = new ConfirmDialogModel('Подтверждение действия', message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '400px',
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      if (!this.result) {
        this.photoService.deleteAlbum(this.conferenceId).subscribe(data => {
          this.photos = null;
        });
      }
    });
  }
}
