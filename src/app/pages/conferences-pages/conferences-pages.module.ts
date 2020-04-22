import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConferencesPagesRoutingModule } from './conferences-pages-routing.module';
import {AboutConferencePageComponent} from './pages/about-conference-page/about-conference-page.component';
import {ConferencesListPageComponent} from './pages/conferences-list-page/conferences-list-page.component';
import {ConferenceModule} from '../../entities/conference/conference.module';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {EventModule} from '../../entities/event/event.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ConferencePhotoArchivePageComponent } from './pages/conference-photo-archive-page/conference-photo-archive-page.component';
import {PhotoComponent} from '../../entities/photo/components/photo/photo.component';
import {FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {EditorModule} from '@tinymce/tinymce-angular';
import {PhotoEditorComponent} from '../../entities/photo/components/photo-editor/photo-editor.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { ConfirmDialogComponent } from './pages/confirm-dialog/confirm-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';




@NgModule({
  declarations: [
    AboutConferencePageComponent,
    ConferencesListPageComponent,
    ConferencePhotoArchivePageComponent,
    PhotoComponent,
    PhotoEditorComponent,
    ConfirmDialogComponent
  ],
    imports: [
        CommonModule,
        ConferencesPagesRoutingModule,
        ConferenceModule,
        MatCardModule,
        MatDividerModule,
        MatToolbarModule,
        MatButtonModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        EditorModule,
        MatInputModule,
        MatIconModule,
        MatDialogModule,
        EventModule,
        FormsModule
    ],
    exports: [
        AboutConferencePageComponent,
        ConferencesListPageComponent,
        PhotoEditorComponent
    ]
})
export class ConferencesPagesModule { }
