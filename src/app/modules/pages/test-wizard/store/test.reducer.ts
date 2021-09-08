import { Action, createReducer, on } from '@ngrx/store';

import * as testActions from './test.actions';
import { initialState, TestStoreState } from './test.state';

const testReducer = createReducer(
  initialState,
  on(testActions.loadTestSuccess, (state: TestStoreState, action) => ({
    ...state,
    test: action.payload,
  })),
  on(testActions.evaluateResultSuccess, (state: TestStoreState, action) => ({
    ...state,
    testEvaluation: action.payload
  }))
);

export function reducer(state: TestStoreState, action: Action) {
  return testReducer(state, action);
}
