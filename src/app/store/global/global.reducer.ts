import { Action, createReducer, on } from '@ngrx/store';

import * as globalActions from './global.actions';
import { GlobalStoreState, initialState } from './global.state';

const globalReducer = createReducer(
  initialState,
  on(globalActions.updateSelectedTestId, (state: GlobalStoreState, action) => ({
    ...state,
    selectedTestId: action.payload,
  })),
  on(globalActions.loadTestsSuccess, (state: GlobalStoreState, action) => ({
    ...state,
    testsPreview: action.payload,
  })),
);

export function reducer(state: GlobalStoreState, action: Action) {
  return globalReducer(state, action);
}
