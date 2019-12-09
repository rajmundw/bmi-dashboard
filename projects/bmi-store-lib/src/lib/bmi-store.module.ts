import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { peopleReducer } from './bmi-people-info/people.reducer';
import { PoepleInfoEffects } from './bmi-people-info/people.effects';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({ main: peopleReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 50
    }),
    EffectsModule.forRoot([
      PoepleInfoEffects
    ])
  ],
  exports: [StoreModule, EffectsModule],
})
export class BmiStoreModule { }
