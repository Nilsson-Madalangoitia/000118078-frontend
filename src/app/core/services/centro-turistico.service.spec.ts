import { TestBed } from '@angular/core/testing';

import { CentroTuristicoService } from './centro-turistico.service';

describe('CentroTuristicoService', () => {
  let service: CentroTuristicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentroTuristicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
