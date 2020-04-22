import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserRolesPipe} from './pipes/user-roles.pipe';
import {MatCardModule} from '@angular/material/card';
import {SpeakerComponent} from './components/speaker/speaker.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {EventsPagesRoutingModule} from '../../pages/events-pages/events-pages-routing.module';
import {MatRippleModule} from '@angular/material/core';


@NgModule({
  declarations: [
    UserRolesPipe,
    SpeakerComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    EventsPagesRoutingModule,
    MatRippleModule
  ],
  exports: [
    UserRolesPipe,
    SpeakerComponent
  ]
})
export class UserModule { }
