import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventTypePipe} from './pipes/event-type.pipe';
import {EventComponent} from './components/event/event.component';
import {EventEditorComponent} from './components/event-editor/event-editor.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {EditorModule} from '@tinymce/tinymce-angular';
import {MatInputModule} from '@angular/material/input';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {UserModule} from '../user/user.module';
import {SpeakersListComponent} from './components/speakers-list/speakers-list.component';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    EventTypePipe,
    EventComponent,
    EventEditorComponent,
    SpeakersListComponent
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
    FlexLayoutModule,
    UserModule,
    MatListModule,
    FormsModule
  ],
  exports: [
    EventTypePipe,
    EventComponent,
    EventEditorComponent,
  ]
})
export class EventModule { }
