import { TestBed } from '@angular/core/testing';

import { BicicletasService } from './bicicletas.service';

describe('BicicletasService', () => {
  let service: BicicletasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BicicletasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
