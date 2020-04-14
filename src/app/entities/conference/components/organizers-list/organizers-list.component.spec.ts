import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizersListComponent } from './organizers-list.component';

describe('OrganizersListComponent', () => {
  let component: OrganizersListComponent;
  let fixture: ComponentFixture<OrganizersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
