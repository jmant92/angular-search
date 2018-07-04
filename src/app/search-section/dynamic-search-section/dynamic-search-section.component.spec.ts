import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSearchSectionComponent } from './dynamic-search-section.component';

describe('DynamicSearchSectionComponent', () => {
  let component: DynamicSearchSectionComponent;
  let fixture: ComponentFixture<DynamicSearchSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicSearchSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicSearchSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
