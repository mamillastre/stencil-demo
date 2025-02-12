import { TestBed } from '@angular/core/testing';

import { RdrElementsService } from './rdr-elements.service';

describe('RdrElementsService', () => {
  let service: RdrElementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdrElementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
