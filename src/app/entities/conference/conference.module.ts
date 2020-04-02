import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferenceComponent } from './components/conference/conference.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {ConferencesPagesRoutingModule} from '../../pages/conferences-pages/conferences-pages-routing.module';
import {ConferenceEditorComponent} from './components/conference-editor/conference-editor.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {EditorModule} from '@tinymce/tinymce-angular';
import {HttpClientModule} from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material/core';



@NgModule({
  declarations: [ConferenceComponent, ConferenceEditorComponent],
  exports: [
    ConferenceComponent,
    ConferenceEditorComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    ConferencesPagesRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    EditorModule,
    HttpClientModule,
    MatNativeDateModule
  ]
})
export class ConferenceModule { }
