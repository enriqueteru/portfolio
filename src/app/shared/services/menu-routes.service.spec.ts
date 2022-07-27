import { TestBed } from '@angular/core/testing';

import { MenuRoutesService } from './menu-routes.service';

describe('MenuRoutesService', () => {
  let service: MenuRoutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuRoutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
