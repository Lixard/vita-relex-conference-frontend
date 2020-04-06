import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MainToolbarComponent } from './pages/main-toolbar/main-toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {ConferenceModule} from './entities/conference/conference.module';
import {EventModule} from './entities/event/event.module';
import {EventsPagesModule} from './pages/events-pages/events-pages.module';
import {ConferencesPagesModule} from './pages/conferences-pages/conferences-pages.module';
import {CoreModule} from './core/core.module';
import {LoginPagesModule} from './pages/login-pages/login-pages.module';
import {UserComponent} from './entities/user/components/user/user.component';
import {UserListPageComponent} from './pages/user-list-page/user-list-page.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainToolbarComponent,
    UserComponent,
    UserListPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    ConferenceModule,
    EventModule,
    EventsPagesModule,
    ConferencesPagesModule,
    CoreModule,
    LoginPagesModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
