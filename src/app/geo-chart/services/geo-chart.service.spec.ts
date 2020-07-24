/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GeoChartService } from './geo-chart.service';

describe('Service: GeoChart', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeoChartService]
    });
  });

  it('should ...', inject([GeoChartService], (service: GeoChartService) => {
    expect(service).toBeTruthy();
  }));
});
