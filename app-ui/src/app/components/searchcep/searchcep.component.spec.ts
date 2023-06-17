import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchcepComponent } from './searchcep.component';

describe('SearchcepComponent', () => {
  let component: SearchcepComponent;
  let fixture: ComponentFixture<SearchcepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchcepComponent]
    });
    fixture = TestBed.createComponent(SearchcepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
