import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferencesListPageComponent } from './conferences-list-page.component';

describe('ConferencesListPageComponent', () => {
  let component: ConferencesListPageComponent;
  let fixture: ComponentFixture<ConferencesListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferencesListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferencesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
