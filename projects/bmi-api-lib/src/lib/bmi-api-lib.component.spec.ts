import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiApiLibComponent } from './bmi-api-lib.component';

describe('BmiApiLibComponent', () => {
  let component: BmiApiLibComponent;
  let fixture: ComponentFixture<BmiApiLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmiApiLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmiApiLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
