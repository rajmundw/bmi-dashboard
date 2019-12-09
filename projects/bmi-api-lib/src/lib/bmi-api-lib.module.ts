import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmiApiLibComponent } from './bmi-api-lib.component';



@NgModule({
  declarations: [
    BmiApiLibComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BmiApiLibComponent
  ]
})
export class BmiApiLibModule { }
