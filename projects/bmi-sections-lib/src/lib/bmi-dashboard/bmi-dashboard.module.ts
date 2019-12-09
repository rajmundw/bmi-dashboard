import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmiDashboardComponent } from './bmi-dashboard.component';
import { BmiDashboardSectionComponent } from './bmi-dashboard-section/bmi-dashboard-section.component';
import { BmiDashboardLegendComponent } from './bmi-dashboard-legend/bmi-dashboard-legend.component';



@NgModule({
  declarations: [
    BmiDashboardComponent,
    BmiDashboardSectionComponent,
    BmiDashboardLegendComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BmiDashboardComponent
  ]
})
export class BmiDashboardModule { }
