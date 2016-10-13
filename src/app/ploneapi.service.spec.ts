/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PloneapiService } from './ploneapi.service';

describe('Service: Ploneapi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PloneapiService]
    });
  });

  it('should ...', inject([PloneapiService], (service: PloneapiService) => {
    expect(service).toBeTruthy();
  }));
});
