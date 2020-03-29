import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceEditorComponent } from './conference-editor.component';

describe('ConferenceEditorComponent', () => {
  let component: ConferenceEditorComponent;
  let fixture: ComponentFixture<ConferenceEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenceEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
