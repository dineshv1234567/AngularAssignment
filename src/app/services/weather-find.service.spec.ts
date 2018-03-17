import { TestBed, inject } from '@angular/core/testing';

import { WeatherFindService } from './weather-find.service';

describe('WeatherFindService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherFindService]
    });
  });

  it('should be created', inject([WeatherFindService], (service: WeatherFindService) => {
    expect(service).toBeTruthy();
  }));
});
