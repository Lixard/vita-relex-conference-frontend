import { TestBed } from '@angular/core/testing';

import { LoginPagesGuard } from './login-pages.guard';

describe('LoginPagesGuard', () => {
  let guard: LoginPagesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginPagesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
