import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EventTypePipe} from './pipes/event-type.pipe';
import {EventComponent} from './components/event/event.component';
import {EventEditorComponent} from './components/event-editor/event-editor.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {EditorModule} from '@tinymce/tinymce-angular';
import {MatInputModule} from '@angular/material/input';
import {ActivatedRoute, RouterModule} from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    EventTypePipe,
    EventComponent,
    EventEditorComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    EditorModule,
    MatInputModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [
    EventTypePipe,
    EventComponent,
    EventEditorComponent,
  ]
})
export class EventModule { }
