import { TestBed } from '@angular/core/testing';

import { NgUranusPerdService } from './ng-uranus-perd.service';

describe('NgUranusPerdLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgUranusPerdService = TestBed.get(NgUranusPerdService);
    expect(service).toBeTruthy();
  });
});
