import { TestBed } from '@angular/core/testing';

import { GestionderangementService } from './gestionderangement.service';

describe('GestionderangementService', () => {
  let service: GestionderangementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionderangementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
