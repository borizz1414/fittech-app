import { TestBed, async, inject } from '@angular/core/testing';

import { NutricionGuard } from './nutricion.guard';

describe('NutricionGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NutricionGuard]
    });
  });

  it('should ...', inject([NutricionGuard], (guard: NutricionGuard) => {
    expect(guard).toBeTruthy();
  }));
});
