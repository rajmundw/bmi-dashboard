import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiDashboardComponent } from './bmi-dashboard.component';

describe('BmiDashboardComponent', () => {
  let component: BmiDashboardComponent;
  let fixture: ComponentFixture<BmiDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmiDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmiDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
