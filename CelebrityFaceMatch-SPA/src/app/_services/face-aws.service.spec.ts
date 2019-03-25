/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FaceAwsService } from './face-aws.service';

describe('Service: FaceAws', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FaceAwsService]
    });
  });

  it('should ...', inject([FaceAwsService], (service: FaceAwsService) => {
    expect(service).toBeTruthy();
  }));
});
