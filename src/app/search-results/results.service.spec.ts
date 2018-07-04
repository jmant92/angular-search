import { TestBed, inject } from '@angular/core/testing';

import { ResultsService } from './results.service';

describe('ResultsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResultsService]
    });
  });

  it('should be created', inject([ResultsService], (service: ResultsService) => {
    expect(service).toBeTruthy();
  }));

  it('should return Observable<Object[]>', () => {
    const resultsServiceSpy =
      jasmine.createSpyObj('ResultsService', ['getList']);

      const stubValue = [
        { "id": 11, "name": "Mr. Nice" },
        { "id": 12, "name": "Narco" },
        { "id": 13, "name": "Bombasto" },
        { "id": 14, "name": "Celeritas" },
        { "id": 15, "name": "Magneta" },
        { "id": 16, "name": "RubberMan" },
        { "id": 17, "name": "Dynama" },
        { "id": 18, "name": "Dr IQ" },
        { "id": 19, "name": "Magma" },
        { "id": 20, "name": "Tornado" }
    ];
      resultsServiceSpy.getList.and.returnValue(stubValue);
  });
});
