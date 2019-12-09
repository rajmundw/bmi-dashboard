import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { PersonalInfoService } from 'bmi-api-lib';
import { switchMapActionType } from '../rxjs/switch-map-action';

import {
    LoadPersonalInfoAction,
    LoadPersonalInfosSuccessAction,
    LoadPersonalInfoFailureAction
} from './people.actions';

@Injectable()
export class PoepleInfoEffects {

  loadPersonalInfo$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(LoadPersonalInfoAction),
    switchMapActionType(
      _ => this.personalInfoService.loadPersonalInfo$(),
      peopleInfo => LoadPersonalInfosSuccessAction( { peopleInfo: peopleInfo.results } ),
      error => LoadPersonalInfoFailureAction({ error })
    )
  ));

  constructor(
    private actions$: Actions,
    private personalInfoService: PersonalInfoService
  ) { }
}
