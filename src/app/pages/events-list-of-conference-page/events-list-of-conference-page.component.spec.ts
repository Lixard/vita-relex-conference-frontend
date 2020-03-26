import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsListOfConferencePageComponent } from './events-list-of-conference-page.component';

describe('EventsListOfConferencePageComponent', () => {
  let component: EventsListOfConferencePageComponent;
  let fixture: ComponentFixture<EventsListOfConferencePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsListOfConferencePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsListOfConferencePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
