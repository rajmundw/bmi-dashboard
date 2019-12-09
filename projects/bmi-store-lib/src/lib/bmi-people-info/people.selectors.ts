import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { FeatureStoreKeys } from '../feature-store.keys';
import { legendLimModel } from 'bmi-common-lib';

const settingsFeatureSelector: MemoizedSelector<object, any> = createFeatureSelector<any>(FeatureStoreKeys.main);
export const personalInfoSelector: MemoizedSelector<object, any> = createSelector(settingsFeatureSelector,
    ({ peopleInfo }) => {
        const personalDetails = Array(7).fill(0).map( (_, index) => index).map( (index) =>  {
            const sectionPattern = {
                title: null,
                people: []
            };
            if (index <= 4) {
                sectionPattern.title = `${index * 20} - ${(index + 1) * 20} BBY`;
            } else if ( index === 5 ) {
                sectionPattern.title = '100+ BBY';
            } else {
                sectionPattern.title = 'unknown';
            }
            return sectionPattern;
        });

        peopleInfo && peopleInfo.forEach( person => {
 
            const bmiResult = Number((Number(person.mass) / (Number(person.height) * 0.01 * Number(person.height) * 0.01)).toFixed(2));
            const classResult = legendLimModel.filter( element => element.minValue <= bmiResult && element.maxValue > bmiResult);
      
            personalDetails[typeof parseInt(person.birth_year) === 'number' && person.birth_year !== 'unknown' ? Math.floor(parseInt(person.birth_year) / 20) : 6 ].people.push(
            {...person, bmi: bmiResult, style: {background: classResult[0].color}}
            );
});

        return personalDetails;
    });
