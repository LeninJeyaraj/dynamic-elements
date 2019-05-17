import { TestBed } from '@angular/core/testing';

import { DynamicElementsService } from './dynamic-elements.service';

describe('DynamicElementsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynamicElementsService = TestBed.get(DynamicElementsService);
    expect(service).toBeTruthy();
  });
});
