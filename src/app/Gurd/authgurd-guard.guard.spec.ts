import { TestBed } from '@angular/core/testing';

import { AuthgurdGuardGuard } from './authgurd-guard.guard';

describe('AuthgurdGuardGuard', () => {
  let guard: AuthgurdGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthgurdGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
