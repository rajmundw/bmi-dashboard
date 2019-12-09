import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-bmi-dashboard-section',
  templateUrl: './bmi-dashboard-section.component.html',
  styleUrls: ['./bmi-dashboard-section.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BmiDashboardSectionComponent implements OnInit {

  @Input() personalDetail;
  constructor() { }

  ngOnInit() {
    this.personalDetail.people.sort((a, b) => Number(b.birth_year.replace('BBY', '')) - Number(a.birth_year.replace('BBY', '')));
  }

}
