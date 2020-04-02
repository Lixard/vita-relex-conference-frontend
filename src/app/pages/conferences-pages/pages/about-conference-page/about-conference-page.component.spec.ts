import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutConferencePageComponent } from './about-conference-page.component';

describe('AboutConferencePageComponent', () => {
  let component: AboutConferencePageComponent;
  let fixture: ComponentFixture<AboutConferencePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutConferencePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutConferencePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
