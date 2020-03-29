import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeEventComponent } from './change-event.component';

describe('ChangeEventComponent', () => {
  let component: ChangeEventComponent;
  let fixture: ComponentFixture<ChangeEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
