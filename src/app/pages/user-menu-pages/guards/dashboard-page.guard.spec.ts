import { TestBed } from '@angular/core/testing';

import { DashboardPageGuard } from './dashboard-page.guard';

describe('DashboardPageGuard', () => {
  let guard: DashboardPageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DashboardPageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
