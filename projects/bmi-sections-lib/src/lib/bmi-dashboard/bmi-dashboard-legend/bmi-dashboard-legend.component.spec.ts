import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiDashboardLegendComponent } from './bmi-dashboard-legend.component';

describe('BmiDashboardLegendComponent', () => {
  let component: BmiDashboardLegendComponent;
  let fixture: ComponentFixture<BmiDashboardLegendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmiDashboardLegendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmiDashboardLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
