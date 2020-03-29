import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeConferenceComponent } from './change-conference.component';

describe('ChangeConferenceComponent', () => {
  let component: ChangeConferenceComponent;
  let fixture: ComponentFixture<ChangeConferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeConferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeConferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
