import { createAction, props } from '@ngrx/store';


export const LoadPersonalInfoAction = createAction('[PersonalInfo] Load Personal Info');
export const LoadPersonalInfosSuccessAction = createAction('PersonalInfo] Load Personal Info Success', props<{ peopleInfo: any}>());
export const LoadPersonalInfoFailureAction = createAction('PersonalInfo] Load Personal Info Failure', props<{ error: any }>());
