import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { legendLimModel } from 'bmi-common-lib';

@Component({
  selector: 'lib-bmi-dashboard-legend',
  templateUrl: './bmi-dashboard-legend.component.html',
  styleUrls: ['./bmi-dashboard-legend.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BmiDashboardLegendComponent implements OnInit {
  legendeModel = legendLimModel;
  constructor() { }

  ngOnInit() {
  }

}
