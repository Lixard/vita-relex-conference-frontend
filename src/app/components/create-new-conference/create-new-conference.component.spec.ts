import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewConferenceComponent } from './create-new-conference.component';

describe('CreateNewConferenceComponent', () => {
  let component: CreateNewConferenceComponent;
  let fixture: ComponentFixture<CreateNewConferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewConferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewConferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
