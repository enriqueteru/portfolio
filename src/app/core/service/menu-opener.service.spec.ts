import { TestBed } from '@angular/core/testing';

import { MenuOpenerService } from './menu-opener.service';

describe('MenuOpenerService', () => {
  let service: MenuOpenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuOpenerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
