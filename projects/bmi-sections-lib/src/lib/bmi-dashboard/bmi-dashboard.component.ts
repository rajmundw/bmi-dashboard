import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoadPersonalInfoAction, personalInfoSelector } from 'bmi-store-lib';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-bmi-dashboard',
  templateUrl: './bmi-dashboard.component.html',
  styleUrls: ['./bmi-dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BmiDashboardComponent implements OnInit {

  personalDetails: any;

  presonalInfo$: Observable<any> = this.store.select(personalInfoSelector).pipe(
  );
  constructor( private store: Store<any> ) { }

  ngOnInit() {
    this.store.dispatch( LoadPersonalInfoAction() );
  }
}