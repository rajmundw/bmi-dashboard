import { Action, createReducer, on } from '@ngrx/store';
import { LoadPersonalInfosSuccessAction } from './people.actions';
import { PeopleInfoState } from './people.state';


const reducer = createReducer(
  new PeopleInfoState(),
    on( LoadPersonalInfosSuccessAction, (state, { peopleInfo }) => ({ ...state, peopleInfo })),
)
export function peopleReducer(state: PeopleInfoState, action: Action) {
  return reducer(state, action);
}
