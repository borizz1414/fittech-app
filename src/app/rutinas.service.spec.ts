import { TestBed } from '@angular/core/testing';

import { RutinasService } from './rutinas.service';

describe('RutinasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RutinasService = TestBed.get(RutinasService);
    expect(service).toBeTruthy();
  });
});
