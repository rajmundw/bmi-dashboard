import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiDashboardSectionComponent } from './bmi-dashboard-section.component';

describe('BmiDashboardSectionComponent', () => {
  let component: BmiDashboardSectionComponent;
  let fixture: ComponentFixture<BmiDashboardSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmiDashboardSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmiDashboardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
