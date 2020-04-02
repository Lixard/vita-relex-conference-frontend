import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEventPageComponent } from './about-event-page.component';

describe('AboutEventPageComponent', () => {
  let component: AboutEventPageComponent;
  let fixture: ComponentFixture<AboutEventPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutEventPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutEventPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
