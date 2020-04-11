import { TestBed } from '@angular/core/testing';

import { UserMenuPagesGuard } from './user-menu-pages.guard';

describe('UserMenuPagesGuard', () => {
  let guard: UserMenuPagesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserMenuPagesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
