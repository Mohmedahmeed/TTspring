import { TestBed } from '@angular/core/testing';

import { GestionsiteradioService } from './gestionsiteradio.service';

describe('GestionsiteradioService', () => {
  let service: GestionsiteradioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionsiteradioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
