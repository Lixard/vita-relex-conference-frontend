import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferencePhotoArchivePageComponent } from './conference-photo-archive-page.component';

describe('ConferenceAlbumPageComponent', () => {
  let component: ConferencePhotoArchivePageComponent;
  let fixture: ComponentFixture<ConferencePhotoArchivePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferencePhotoArchivePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferencePhotoArchivePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
