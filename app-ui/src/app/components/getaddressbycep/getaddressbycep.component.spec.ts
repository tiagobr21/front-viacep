import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetaddressbycepComponent } from './getaddressbycep.component';

describe('GetaddressbycepComponent', () => {
  let component: GetaddressbycepComponent;
  let fixture: ComponentFixture<GetaddressbycepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetaddressbycepComponent]
    });
    fixture = TestBed.createComponent(GetaddressbycepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
