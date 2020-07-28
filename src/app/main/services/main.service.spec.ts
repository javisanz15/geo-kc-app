/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MainService } from './main.service';
import { HttpClientModule } from '@angular/common/http';

describe('Service: Main', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainService],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should ...', inject([MainService], (service: MainService) => {
    expect(service).toBeTruthy();
  }));

  it('should load tracts', inject([MainService], (service: MainService) => {
    let result = service.getKCTracts();
    expect(result).not.toBeNull();
  }));

});
